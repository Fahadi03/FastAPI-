import logging

from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from sqlalchemy.orm import Session

from auth import (
    create_access_token,
    get_current_user,
    hash_password,
    verify_password,
)
from database import Base, engine, get_db
from model import User
from schemas import Token, UserCreate, UserOut

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(name)s: %(message)s",
)
logger = logging.getLogger("login-api")

app = FastAPI(title="Simple Login System")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://login-api-with-fast-api.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create any missing tables in Neon when the app starts. If the database is
# asleep or unreachable the app still boots, so it can answer /health and
# report the problem instead of crash-looping.
try:
    Base.metadata.create_all(bind=engine)
except SQLAlchemyError:
    logger.exception("Could not prepare tables at startup - is the database reachable?")


@app.exception_handler(RequestValidationError)
async def validation_error_handler(request: Request, exc: RequestValidationError):
    """Turn Pydantic's list of errors into one sentence the UI can display."""
    first = exc.errors()[0]
    field = str(first.get("loc", ["value"])[-1])
    message = first.get("msg", "Invalid value")
    logger.info("Validation error on %s: %s", request.url.path, exc.errors())

    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={"detail": f"{field.capitalize()}: {message}"},
    )


@app.exception_handler(SQLAlchemyError)
async def database_error_handler(request: Request, exc: SQLAlchemyError):
    """Any database failure becomes a clear 503 instead of a bare 500."""
    logger.exception("Database error on %s", request.url.path)

    return JSONResponse(
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        content={"detail": "The database is temporarily unavailable. Please try again."},
    )


@app.exception_handler(Exception)
async def unhandled_error_handler(request: Request, exc: Exception):
    """Last resort: log the real cause, tell the user something neutral."""
    logger.exception("Unhandled error on %s", request.url.path)

    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "Something went wrong on our side. Please try again."},
    )


@app.get("/")
def home():
    return {"message": "hello"}


@app.get("/health")
def health(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        database = "ok"
    except SQLAlchemyError:
        logger.exception("Health check: database unreachable")
        database = "unavailable"

    return {"stats": "OKK", "database": database}


@app.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == user.username).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    new_user = User(
        username=user.username,
        hashed_password=hash_password(user.password),
    )

    db.add(new_user)

    try:
        db.commit()
    except IntegrityError:
        # Someone claimed the same username between the check above and this
        # commit. The unique index caught it; answer like the check would have.
        db.rollback()
        logger.info("Duplicate username rejected by the database: %s", user.username)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    db.refresh(new_user)
    logger.info("Registered new user: %s", new_user.username)

    return new_user


@app.post("/login", response_model=Token)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    user = db.query(User).filter(User.username == form_data.username).first()

    if not user or not verify_password(form_data.password, user.hashed_password):
        logger.info("Failed login attempt for username: %s", form_data.username)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(user.username)

    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/me", response_model=UserOut)
def read_me(current_user: User = Depends(get_current_user)):
    return current_user


@app.get("/users", response_model=list[UserOut])
def get_all_users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    users = db.query(User).all()
    return users
