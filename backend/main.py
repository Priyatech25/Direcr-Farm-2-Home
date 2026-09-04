from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import ai_routes, weather_routes

app = FastAPI(
    title="Direct Farm 2 Home API",
    description="Backend API for Direct Farm 2 Home",
    version="1.0.0"
)

# Add CORS middleware to allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development; change to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_routes.router, prefix="/api")
app.include_router(weather_routes.router, prefix="/api")

@app.get("/")
def home():
    return {
        "message": "Direct Farm 2 Home API is running"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "success",
        "message": "Backend is working"
    }