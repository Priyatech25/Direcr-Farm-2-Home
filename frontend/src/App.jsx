import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"; 
import Products from "./pages/Products/Products";
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import ConsumerDashboard from "./pages/Consumer/ConsumerDashboard";
import AddProduct from "./pages/Farmer/AddProduct";
import MyProducts from "./pages/Farmer/MyProducts";
import AIPrediction from "./pages/Farmer/AIPrediction";
import Weather from "./pages/Farmer/Weather";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Wishlist from "./pages/Wishlist/Wishlist";
import FarmerOrders from "./pages/Farmer/Orders";
import ConsumerOrders from "./pages/Consumer/Orders";
import Analytics from "./pages/Farmer/Analytics";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            
            {/* Protected Routes for Farmers */}
            <Route path="/farmer-dashboard" element={
              <ProtectedRoute requiredRole="Farmer">
                <FarmerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/farmer/add-product" element={
              <ProtectedRoute requiredRole="Farmer">
                <AddProduct />
              </ProtectedRoute>
            } />
            <Route path="/my-products" element={
              <ProtectedRoute requiredRole="Farmer">
                <MyProducts />
              </ProtectedRoute>
            } />
            <Route path="/ai-prediction" element={
              <ProtectedRoute requiredRole="Farmer">
                <AIPrediction />
              </ProtectedRoute>
            } />
            <Route path="/weather" element={
              <ProtectedRoute requiredRole="Farmer">
                <Weather />
              </ProtectedRoute>
            } />
            <Route path="/farmer-orders" element={
              <ProtectedRoute requiredRole="Farmer">
                <FarmerOrders />
              </ProtectedRoute>
            } />

            {/* Protected Routes for Consumers */}
            <Route path="/consumer-dashboard" element={
              <ProtectedRoute requiredRole="Consumer">
                <ConsumerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute requiredRole="Consumer">
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute requiredRole="Consumer">
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/wishlist" element={
              <ProtectedRoute requiredRole="Consumer">
                <Wishlist />
              </ProtectedRoute>
            } />
            <Route path="/consumer-orders" element={
              <ProtectedRoute requiredRole="Consumer">
                <ConsumerOrders />
              </ProtectedRoute>
            } />

            {/* Farmer Analytics */}
            <Route path="/analytics" element={
              <ProtectedRoute requiredRole="Farmer">
                <Analytics />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;