import { useState } from "react";

function AIPrediction() {
  const [crop, setCrop] = useState("");
  const [district, setDistrict] = useState("");
  const [month, setMonth] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const predictPrice = async () => {
    if (!crop || !district || !month) {
        alert("Please select all fields.");
        return;
    }
    
    setLoading(true);
    try {
        const response = await fetch("http://localhost:8000/api/predict-price", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product: crop,
                season: month,
                quantity: 1, // Defaulting for prediction
                location: district
            })
        });
        
        const data = await response.json();
        
        if (data.status === "success") {
            setResult({
                price: `Rs ${data.suggested_selling_price} / Kg`,
                demand: data.price_trend === "increasing" ? "High" : "Medium",
                recommendation: `Estimated Market Price: Rs ${data.estimated_market_price} / Kg. Trend: ${data.price_trend}.`
            });
        }
    } catch (error) {
        console.error("Error fetching prediction:", error);
        alert("Failed to fetch prediction from backend.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        🤖 AI Crop Price Prediction
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">

        <div className="space-y-5">

          <div>
            <label className="font-bold">Crop</label>

            <select
              className="w-full border p-3 rounded-lg mt-2"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            >
              <option>Select Crop</option>
              <option>Tomato</option>
              <option>Potato</option>
              <option>Mango</option>
              <option>Onion</option>
            </select>
          </div>

          <div>
            <label className="font-bold">District</label>

            <input
              type="text"
              className="w-full border p-3 rounded-lg mt-2"
              placeholder="Enter District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>

          <div>
            <label className="font-bold">Month</label>

            <select
              className="w-full border p-3 rounded-lg mt-2"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>

          <button
            onClick={predictPrice}
            disabled={loading}
            className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 disabled:bg-gray-400"
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>

        </div>

      </div>

      {result && (

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8 max-w-3xl">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Prediction Result
          </h2>

          <div className="space-y-4 text-xl">

            <p>
              💰 Expected Price :
              <span className="font-bold text-green-700">
                {" "}{result.price}
              </span>
            </p>

            <p>
              📈 Demand :
              <span className="font-bold text-blue-700">
                {" "}{result.demand}
              </span>
            </p>

            <p>
              💡 Recommendation :
              <span className="font-bold text-red-600">
                {" "}{result.recommendation}
              </span>
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default AIPrediction;