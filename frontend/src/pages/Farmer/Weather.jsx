import {
  FaCloudSun,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCloudRain,
} from "react-icons/fa";
import { useState, useEffect } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/weather");
        const data = await response.json();
        if (data.status === "success") {
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="p-8">Loading Weather...</div>;
  }

  if (!weatherData) {
    return <div className="p-8">Error loading weather data.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Farm Weather Dashboard
      </h1>

      {/* Today's Weather */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex items-center gap-5">

          <FaCloudSun
            className="text-yellow-500"
            size={80}
          />

          <div>

            <h2 className="text-3xl font-bold">
              {weatherData.location}
            </h2>

            <h1 className="text-5xl font-bold mt-3">
              {weatherData.temperature}°C
            </h1>

            <p className="text-lg text-gray-600">
              {weatherData.weather_condition}
            </p>
            
            {weatherData.suggestions && weatherData.suggestions.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-700">
                    <p className="font-semibold">AI Farm Suggestions:</p>
                    <ul className="list-disc ml-5">
                        {weatherData.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}

          </div>

        </div>

      </div>

      {/* Weather Cards */}

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow-lg p-6">

          <FaTemperatureHigh
            className="text-red-500 text-4xl mb-3"
          />

          <h3 className="text-gray-500">
            Temperature
          </h3>

          <h1 className="text-3xl font-bold">
            {weatherData.temperature}°C
          </h1>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <FaTint
            className="text-blue-500 text-4xl mb-3"
          />

          <h3 className="text-gray-500">
            Humidity
          </h3>

          <h1 className="text-3xl font-bold">
            {weatherData.humidity}%
          </h1>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <FaWind
            className="text-green-500 text-4xl mb-3"
          />

          <h3 className="text-gray-500">
            Wind Speed
          </h3>

          <h1 className="text-3xl font-bold">
            {weatherData.wind_speed} km/h
          </h1>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <FaCloudRain
            className="text-indigo-500 text-4xl mb-3"
          />

          <h3 className="text-gray-500">
            Rain Chance
          </h3>

          <h1 className="text-3xl font-bold">
            {weatherData.rain_probability}%
          </h1>

        </div>

      </div>

    </div>
  );
}

export default Weather;