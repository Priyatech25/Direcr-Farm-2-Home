from fastapi import APIRouter
from pydantic import BaseModel
import random

router = APIRouter()

class PricePredictionRequest(BaseModel):
    product: str
    season: str
    quantity: float
    location: str

class DemandPredictionRequest(BaseModel):
    product: str
    location: str

@router.post("/predict-price")
def predict_price(request: PricePredictionRequest):
    # Mock AI Price Prediction Logic
    base_price = random.uniform(20.0, 100.0)
    
    # Simple mock adjustments
    if request.season.lower() in ['winter', 'summer']:
        base_price *= 1.2 # Higher price in extreme seasons
    
    suggested_price = base_price * 1.1 # 10% markup
    
    return {
        "status": "success",
        "product": request.product,
        "estimated_market_price": round(base_price, 2),
        "suggested_selling_price": round(suggested_price, 2),
        "price_trend": random.choice(["increasing", "stable", "decreasing"])
    }

@router.post("/predict-demand")
def predict_demand(request: DemandPredictionRequest):
    # Mock AI Demand Prediction Logic
    demand_levels = ["High", "Medium", "Low"]
    prediction = random.choice(demand_levels)
    
    explanations = {
        "High": f"High demand expected for {request.product} in {request.location} due to upcoming local festivals and seasonal trends.",
        "Medium": f"Steady demand expected for {request.product}. Standard market conditions apply.",
        "Low": f"Lower demand expected. Consider reducing inventory or offering discounts for {request.product}."
    }
    
    return {
        "status": "success",
        "product": request.product,
        "demand_prediction": prediction,
        "explanation": explanations[prediction]
    }
