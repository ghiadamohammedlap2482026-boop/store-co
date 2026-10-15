import { NavLink } from "react-router-dom";
import heroImage from "../../assets/background.png";

export default function Home() {
  return (
    <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          <div className="lg:col-span-6 z-10 pt-6 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black uppercase leading-[1.1] mb-5">
              Find Clothes <br className="hidden sm:inline" />
              That Matches <br className="hidden sm:inline" />
              Your Style
            </h1>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>

            <NavLink to="/products">
              <button className="w-full sm:w-auto bg-black text-white text-sm font-medium px-12 py-4 rounded-full hover:bg-black/80 transition-all duration-300 shadow-md">
              Shop Now
            </button>
            </NavLink>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 sm:pt-14 border-t border-gray-300/60 mt-10">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">200+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">International Brands</p>
              </div>

              <div className="sm:border-x sm:border-gray-300/60 sm:px-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">2,000+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">High-Quality Products</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">30,000+</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            <div className="absolute top-1/3 left-0 sm:-left-4 lg:-left-6 z-20 pointer-events-none">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="black">
                <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
              </svg>
            </div>

            <div className="absolute top-2 right-0 sm:right-2 z-20 pointer-events-none">
              <svg width="76" height="76" viewBox="0 0 100 100" fill="black">
                <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
              </svg>
            </div>

            <div className="w-full lg:scale-110 lg:translate-x-4 transition-all duration-300">
              <img
                src={heroImage}
                alt="Fashion Models"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}