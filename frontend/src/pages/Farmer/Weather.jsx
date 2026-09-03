import {
  FaCloudSun,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCloudRain,
} from "react-icons/fa";

function Weather() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        🌦 Weather Dashboard
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
              Chikkamagaluru
            </h2>

            <p className="text-gray-500">
              Karnataka, India
            </p>

            <h1 className="text-5xl font-bold mt-3">
              28°C
            </h1>

            <p className="text-lg text-gray-600">
              Partly Cloudy
            </p>

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
            28°C
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
            74%
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
            12 km/h
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
            60%
          </h1>

        </div>

      </div>

      {/* Forecast */}

      <div className="bg-white rounded-xl shadow-lg mt-8 p-8">

        <h2 className="text-2xl font-bold mb-5">
          📅 5-Day Forecast
        </h2>

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-3">Day</th>
              <th>Weather</th>
              <th>Temperature</th>
              <th>Rain</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b text-center">

              <td className="p-3">Monday</td>
              <td>☀ Sunny</td>
              <td>29°C</td>
              <td>10%</td>

            </tr>

            <tr className="border-b text-center">

              <td className="p-3">Tuesday</td>
              <td>🌤 Cloudy</td>
              <td>27°C</td>
              <td>30%</td>

            </tr>

            <tr className="border-b text-center">

              <td className="p-3">Wednesday</td>
              <td>🌧 Rain</td>
              <td>25°C</td>
              <td>80%</td>

            </tr>

            <tr className="border-b text-center">

              <td className="p-3">Thursday</td>
              <td>🌦 Rain</td>
              <td>24°C</td>
              <td>75%</td>

            </tr>

            <tr className="text-center">

              <td className="p-3">Friday</td>
              <td>☀ Sunny</td>
              <td>30°C</td>
              <td>5%</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Weather;