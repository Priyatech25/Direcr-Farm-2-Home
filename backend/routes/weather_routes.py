from fastapi import APIRouter
from pydantic import BaseModel
import random

router = APIRouter()

@router.get("/weather")
def get_weather(location: str = "Local Farm"):
    # Mock Weather Data
    temp = random.randint(15, 35)
    humidity = random.randint(30, 90)
    rain_prob = random.randint(0, 100)
    
    conditions = ["Sunny", "Cloudy", "Rainy", "Partly Cloudy"]
    if rain_prob > 70:
        condition = "Rainy"
    else:
        condition = random.choice(conditions[:2] + [conditions[3]])
        
    suggestions = []
    if condition == "Rainy" or rain_prob > 60:
        suggestions.append("Rain warning: Avoid irrigation today.")
        suggestions.append("Harvest warning: Protect sensitive crops from heavy rain.")
    elif temp > 30 and humidity < 50:
        suggestions.append("Irrigation suggestion: High temperature and low humidity. Irrigate crops in the evening.")
    else:
        suggestions.append("Weather is optimal for general farm activities.")

    return {
        "status": "success",
        "location": location,
        "temperature": temp,
        "humidity": humidity,
        "rain_probability": rain_prob,
        "wind_speed": random.randint(5, 25),
        "weather_condition": condition,
        "suggestions": suggestions
    }
