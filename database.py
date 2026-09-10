import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# 1. Load the .env file into the environment
load_dotenv()

# 2. Read the connection string out of it
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is missing. Check your .env file.")

# 3. The engine = the live connection pool to Neon
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=300,
)

# 4. A factory that produces database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 5. The parent class for all our tables
Base = declarative_base()


# 6. Give a session to a route, then always close it
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()