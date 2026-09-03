
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("consumer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Redirect based on selected role
    if (role === "farmer") {
      navigate("/farmer-dashboard");
    } else {
      navigate("/consumer-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-10">

      {/* Main Login Container */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="hidden md:block relative">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
            alt="Green Farm"
            className="w-full h-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-green-900 bg-opacity-60 flex flex-col justify-end p-12 text-white">

            <p className="text-green-200 font-semibold tracking-wide">
              🌱 DIRECT FARM 2 HOME
            </p>

            <h2 className="text-4xl font-bold mt-3 leading-tight">
              Fresh From the Farm,
              <br />
              Directly to Your Home
            </h2>

            <p className="text-green-100 mt-5 text-lg leading-relaxed">
              Connect with local farmers, discover fresh products
              and build a better farm-to-home community.
            </p>

          </div>

        </div>


        {/* ================= RIGHT LOGIN SECTION ================= */}
        <div className="p-8 md:p-12 lg:p-16">

          {/* Logo / Heading */}
          <div className="text-center">

            <div className="text-5xl">
              🌾
            </div>

            <h1 className="text-3xl font-bold text-green-700 mt-3">
              Direct Farm 2 Home
            </h1>

            <p className="text-gray-500 mt-2">
              Welcome back! Please login to continue.
            </p>

          </div>


          {/* ================= ROLE SELECTION ================= */}
          <div className="mt-8">

            <p className="font-semibold text-gray-700 mb-3">
              Login as
            </p>

            <div className="grid grid-cols-2 gap-4">

              {/* Farmer */}
              <button
                type="button"
                onClick={() => setRole("farmer")}
                className={`p-4 rounded-xl border-2 transition ${
                  role === "farmer"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <div className="text-3xl">
                  👨‍🌾
                </div>

                <p className="font-semibold text-gray-800 mt-2">
                  Farmer
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Sell your products
                </p>
              </button>


              {/* Consumer */}
              <button
                type="button"
                onClick={() => setRole("consumer")}
                className={`p-4 rounded-xl border-2 transition ${
                  role === "consumer"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <div className="text-3xl">
                  🛒
                </div>

                <p className="font-semibold text-gray-800 mt-2">
                  Consumer
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Buy fresh products
                </p>
              </button>

            </div>

          </div>


          {/* ================= LOGIN FORM ================= */}
          <form
            onSubmit={handleLogin}
            className="mt-7"
          >

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />

            </div>


            {/* Password */}
            <div className="mt-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-14 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>


            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mt-4">

              <label className="flex items-center gap-2 text-sm text-gray-600">

                <input
                  type="checkbox"
                  className="accent-green-700"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-sm text-green-700 font-semibold hover:underline"
              >
                Forgot Password?
              </button>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-7 bg-green-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-green-800 transition shadow-lg"
            >
              Login as {role === "farmer" ? "Farmer" : "Consumer"} →
            </button>

          </form>


          {/* ================= REGISTER ================= */}
          <div className="text-center mt-7">

            <p className="text-gray-500">
              Don't have an account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 text-green-700 font-semibold hover:underline"
            >
              Create a New Account
            </Link>

          </div>


          {/* ================= DIVIDER ================= */}
          <div className="flex items-center gap-4 my-7">

            <div className="flex-1 h-px bg-gray-200"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200"></div>

          </div>


          {/* Guest Shopping */}
          <Link
            to="/products"
            className="block w-full text-center border border-green-700 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-50"
          >
            Continue Shopping as Guest 🛒
          </Link>


          {/* Back Home */}
          <div className="text-center mt-6">

            <Link
              to="/"
              className="text-gray-500 hover:text-green-700"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
