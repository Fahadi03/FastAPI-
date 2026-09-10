from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "hello"}

@app.get("/health")
def health():
    return { "stats": "OKK"}

