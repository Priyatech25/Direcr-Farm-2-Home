import { Link } from "react-router-dom";
import {
  FaShoppingBasket,
  FaUserCircle,
  FaLeaf,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-green-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

          <FaLeaf className="text-yellow-300 text-4xl" />

          <div>

            <h1 className="text-white text-3xl font-bold">
              Direct Farm
            </h1>

            <p className="text-green-100 text-sm">
              Fresh From Farmers
            </p>

          </div>

        </Link>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-8 text-white text-lg">

          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-yellow-300">
              Products
            </Link>
          </li>

          <li>
            <Link to="/farmer-dashboard" className="hover:text-yellow-300">
              Farmer
            </Link>
          </li>

          <li>
            <Link to="/consumer-dashboard" className="hover:text-yellow-300">
              Consumer
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-yellow-300">
              Login
            </Link>
          </li>

        </ul>

        {/* Icons */}

        <div className="flex gap-5 text-white text-2xl">

          <Link to="/cart">
            <FaShoppingBasket className="cursor-pointer hover:text-yellow-300" />
          </Link>

          <Link to="/profile">
            <FaUserCircle className="cursor-pointer hover:text-yellow-300" />
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;