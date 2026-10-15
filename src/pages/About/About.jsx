import { Link } from "react-router-dom";
import { FaStore, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaStore className="text-3xl text-black" />,
      title: "Quality Products",
      desc: "We offer top-notch items carefully selected from trusted global brands."
    },
    {
      icon: <FaShippingFast className="text-3xl text-black" />,
      title: "Fast Shipping",
      desc: "Quick and dependable delivery straight to your doorstep within days."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-black" />,
      title: "Secure Payments",
      desc: "100% secure checkout process with flexible payment solutions."
    },
    {
      icon: <FaHeadset className="text-3xl text-black" />,
      title: "24/7 Support",
      desc: "Dedicated customer care team ready to assist you anytime."
    }
  ];

  return (
    <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs sm:text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-semibold">About Us</span>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight mb-6">
              About SHOP.CO
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Welcome to <strong>SHOP.CO</strong>, your ultimate destination for high-quality, 
              stylish, and affordable products. Founded with a vision to redefine online shopping, 
              we bring together the best trends and everyday essentials under one roof.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our commitment is to deliver an effortless shopping experience, outstanding customer service, 
              and value for money every single day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#F0EEED] rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-black text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">
            Ready to explore our products?
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
            Browse through our catalog and find everything you need with exclusive offers and discounts.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}