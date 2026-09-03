import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import FarmerDashboard from "./pages/Farmer/FarmerDashboard";
import ConsumerDashboard from "./pages/Consumer/ConsumerDashboard";
import AddProduct from "./pages/Farmer/AddProduct";
import MyProducts from "./pages/Farmer/MyProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
      <Route path="/farmer/add-product" element={<AddProduct />} />
      <Route path="/my-products" element={<MyProducts />} />
    </Routes>
  );
}

export default App;