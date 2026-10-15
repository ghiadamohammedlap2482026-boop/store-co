import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F0EEED] text-black pt-12 pb-8 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-300">
          <div className="lg:col-span-2">
            <NavLink to="/" className="text-2xl font-black tracking-tight inline-block mb-4">
              SHOP.CO
            </NavLink>
            <p className="text-gray-600 text-sm max-w-sm mb-6 leading-relaxed">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex items-center gap-3">
              <NavLink 
                to="/" 
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-gray-200 text-black hover:bg-black hover:text-white transition-colors"
              >
                <FaTwitter className="text-sm" />
              </NavLink>
              <NavLink 
                to="/" 
                className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </NavLink>
              <NavLink 
                to="/" 
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-gray-200 text-black hover:bg-black hover:text-white transition-colors"
              >
                <FaInstagram className="text-sm" />
              </NavLink>
              <NavLink 
                to="/" 
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-gray-200 text-black hover:bg-black hover:text-white transition-colors"
              >
                <FaGithub className="text-sm" />
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <NavLink to="/about" className="hover:text-black transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Career
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Customer Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Delivery Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">FAQ</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Manage Deliveries
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">
                  Payments
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Shop.co © 2000-2026, All Rights Reserved</p>
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white px-3 py-1 rounded border border-gray-200">Visa</span>
            <span className="bg-white px-3 py-1 rounded border border-gray-200">Mastercard</span>
            <span className="bg-white px-3 py-1 rounded border border-gray-200">PayPal</span>
            <span className="bg-white px-3 py-1 rounded border border-gray-200">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}