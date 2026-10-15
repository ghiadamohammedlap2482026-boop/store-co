import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { useCart } from "../../context/CartContext";

export default function Navbar({ searchQuery, setSearchQuery }) {
  const { totalCartCount } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (window.location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="bg-black text-white text-[10px] sm:text-xs text-center py-2 relative px-4">
        Sign up and get 20% off to your first order.
        <span className="underline cursor-pointer ml-1">Sign Up Now</span>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl text-black focus:outline-none"
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>

            <NavLink to="/" className="shrink-0">
              <span className="text-xl sm:text-2xl font-black tracking-tight">
                SHOP.CO
              </span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-black" : "hover:text-gray-500"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold text-black" : "hover:text-gray-500"}>
              About
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "font-bold text-black" : "hover:text-gray-500"}>
              Products
            </NavLink>
          </div>

          <div className="flex-1 max-w-md relative hidden sm:block">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery || ""}
              onChange={handleSearchChange}
              className="w-full bg-gray-100 rounded-full py-2.5 pl-11 pr-4 text-sm outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xl">
            <NavLink to="/cart" className="relative flex items-center">
              <TiShoppingCart />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </NavLink>

            <NavLink to="/register">
              <FaRegUserCircle />
            </NavLink>
          </div>
        </div>

        <div className="px-4 pb-3 sm:hidden">
          <div className="relative">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery || ""}
              onChange={handleSearchChange}
              className="w-full bg-gray-100 rounded-full py-2 pl-11 pr-4 text-xs outline-none"
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 text-sm font-semibold">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}
            >
              Products
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}