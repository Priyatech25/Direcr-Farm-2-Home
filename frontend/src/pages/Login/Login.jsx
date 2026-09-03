import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { toast, Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaSeedling } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    setLoading(true);
    try {
      const user = await loginUser(email, password);

      // Fetch user role from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const { role } = userDoc.data();
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          if (role === "Farmer") navigate("/farmer-dashboard");
          else if (role === "admin") navigate("/admin-dashboard");
          else navigate("/consumer-dashboard");
        }, 1000);
      } else {
        toast.error("User profile not found. Please register.");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-10">
      <Toaster position="top-right" />
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Image */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
            alt="Green Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-60 flex flex-col justify-end p-12 text-white">
            <p className="text-green-200 font-semibold tracking-wide uppercase text-sm">Direct Farm 2 Home</p>
            <h2 className="text-4xl font-bold mt-3 leading-tight">
              Fresh From the Farm,<br />Directly to Your Home
            </h2>
            <p className="text-green-100 mt-5 text-lg leading-relaxed">
              Connect with local farmers, discover fresh products and build a better farm-to-home community.
            </p>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="text-center">
            <FaSeedling className="text-green-600 text-5xl mx-auto" />
            <h1 className="text-3xl font-bold text-green-700 mt-3">Direct Farm 2 Home</h1>
            <p className="text-gray-500 mt-2">Welcome back! Please login to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-green-700 font-semibold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-green-800 transition shadow-lg disabled:bg-gray-400"
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-500">Don't have an account?{" "}
              <Link to="/register" className="text-green-700 font-semibold hover:underline">Register here</Link>
            </p>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Link to="/products" className="block w-full text-center border border-green-700 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-50">
            Browse Products as Guest
          </Link>

          <div className="text-center mt-5">
            <Link to="/" className="text-gray-500 hover:text-green-700 text-sm">← Back to Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
