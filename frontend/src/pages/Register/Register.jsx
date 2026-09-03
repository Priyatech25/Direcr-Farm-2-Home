import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { toast, Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaSeedling, FaTractor, FaShoppingBasket, FaExclamationTriangle } from "react-icons/fa";

// Check if Firebase is configured
const isFirebaseConfigured = !!(
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_API_KEY !== "undefined"
);

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Consumer",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFirebaseConfigured) {
      toast.error("Firebase is not configured yet. Please create a .env file with your Firebase credentials.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await registerUser(formData.email, formData.password, formData.role, {
        fullName: formData.fullName,
        phone: formData.phone,
      });
      toast.success("Account created! Redirecting...");
      setTimeout(() => {
        if (formData.role === "Farmer") navigate("/farmer-dashboard");
        else navigate("/consumer-dashboard");
      }, 1200);
    } catch (error) {
      console.error("Registration error:", error);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already registered. Please login.");
      } else if (error.message?.includes("not configured")) {
        toast.error("Firebase not configured. Add credentials to frontend/.env");
      } else {
        toast.error(error.message || "Registration failed. Please try again.");
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
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000"
            alt="Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-65 flex flex-col justify-end p-12 text-white">
            <p className="text-green-200 font-semibold tracking-wide uppercase text-sm">Join the Community</p>
            <h2 className="text-4xl font-bold mt-3 leading-tight">
              Start Your Journey<br />with Local Farmers
            </h2>
            <p className="text-green-100 mt-5 text-lg leading-relaxed">
              Whether you grow it or love it fresh — join thousands of farmers and consumers already on our platform.
            </p>
          </div>
        </div>

        {/* Right Register Form */}
        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="text-center mb-8">
            <FaSeedling className="text-green-600 text-5xl mx-auto" />
            <h1 className="text-3xl font-bold text-green-700 mt-3">Create Account</h1>
            <p className="text-gray-500 mt-2">Join Direct Farm 2 Home today</p>
          </div>

          {/* Firebase Warning Banner */}
          {!isFirebaseConfigured && (
            <div className="mb-6 bg-yellow-50 border border-yellow-300 rounded-xl p-4 flex gap-3 items-start">
              <FaExclamationTriangle className="text-yellow-500 text-xl mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-yellow-800">Firebase Not Configured</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Registration is disabled until you add your Firebase credentials.
                  Create <code className="bg-yellow-100 px-1 rounded font-mono">frontend/.env</code> with your Firebase project keys.
                </p>
                <a
                  href="https://console.firebase.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-yellow-800 font-semibold underline text-sm"
                >
                  Go to Firebase Console →
                </a>
              </div>
            </div>
          )}

          {/* Role Selection */}
          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-3">I want to join as</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "Farmer" })}
                className={`p-4 rounded-2xl border-2 transition text-center ${
                  formData.role === "Farmer"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <FaTractor className={`text-3xl mx-auto mb-2 ${formData.role === "Farmer" ? "text-green-600" : "text-gray-400"}`} />
                <p className="font-semibold text-gray-800">Farmer</p>
                <p className="text-xs text-gray-500 mt-1">Sell your products</p>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, role: "Consumer" })}
                className={`p-4 rounded-2xl border-2 transition text-center ${
                  formData.role === "Consumer"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                }`}
              >
                <FaShoppingBasket className={`text-3xl mx-auto mb-2 ${formData.role === "Consumer" ? "text-green-600" : "text-gray-400"}`} />
                <p className="font-semibold text-gray-800">Consumer</p>
                <p className="text-xs text-gray-500 mt-1">Buy fresh products</p>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Min. 6 characters"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-lg disabled:bg-gray-400"
            >
              {loading ? "Creating Account..." : `Register as ${formData.role} →`}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-500">Already have an account?{" "}
              <Link to="/login" className="text-green-700 font-semibold hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;