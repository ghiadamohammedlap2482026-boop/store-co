import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearch, IoFilterOutline } from "react-icons/io5";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../../context/CartContext";

export default function Products() {
  const { searchQuery, setSearchQuery } = useOutletContext();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get("https://fakestoreapi.com/products"),
          axios.get("https://fakestoreapi.com/products/categories")
        ]);

        const fetchedProducts = productsResponse.data;
        const fetchedCategories = categoriesResponse.data;

        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setCategories(["all", ...fetchedCategories]);

        if (fetchedProducts.length > 0) {
          const maxP = Math.ceil(Math.max(...fetchedProducts.map((p) => p.price)));
          setPriceRange(maxP);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery && searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result = result.filter((p) => p.price <= priceRange);

    if (sortBy === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange, sortBy, products]);

  return (
    <div className="bg-[#F2F0F1] min-h-screen pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight">
              All Products
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Showing {filteredProducts.length} of {products.length} Products
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs sm:text-sm font-semibold text-black"
            >
              <IoFilterOutline className="text-base" /> Filters
            </button>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs sm:text-sm border border-gray-200">
              <span className="text-gray-400 font-medium hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-semibold text-black outline-none cursor-pointer"
              >
                <option value="default">Most Popular</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <aside
            className={`lg:col-span-3 bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm ${
              isMobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h2 className="text-base font-bold text-black flex items-center gap-2">
                <IoFilterOutline /> Filters
              </h2>
              {(selectedCategory !== "all" || searchQuery !== "" || sortBy !== "default") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                    setSortBy("default");
                  }}
                  className="text-xs text-gray-400 hover:text-red-500 font-medium"
                >
                  Reset All
                </button>
              )}
            </div>

            <div className="mb-6">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Search
              </label>
              <div className="relative">
                <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Product name..."
                  value={searchQuery || ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Categories
              </label>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`text-left text-xs sm:text-sm py-2 px-3 rounded-xl capitalize font-medium transition-all flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-black text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Max Price
                </label>
                <span className="text-xs sm:text-sm font-bold text-black">${priceRange}</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-black cursor-pointer"
              />
            </div>
          </aside>

          <main className="lg:col-span-9">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="bg-white p-4 rounded-3xl h-72 animate-pulse flex flex-col justify-between"
                  >
                    <div className="bg-gray-200 h-36 rounded-2xl w-full"></div>
                    <div className="space-y-2">
                      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                      <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-sm"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">No Products Found</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-6">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                    setPriceRange(1000);
                  }}
                  className="bg-black text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                      className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                    >
                      <button 
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="absolute top-5 right-5 z-10 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm"
                      >
                        <FaRegHeart className="text-sm" />
                      </button>

                      <Link to={`/product/${product.id}`} className="block">
                        <div className="bg-[#F0EEED] rounded-2xl p-4 sm:p-6 h-48 sm:h-56 flex items-center justify-center overflow-hidden mb-3 relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                          />
                        </div>

                        <div>
                          <h3 className="font-bold text-black text-sm sm:text-base line-clamp-1 group-hover:text-gray-600 transition-colors">
                            {product.title}
                          </h3>

                          <div className="flex items-center gap-1.5 my-2">
                            <div className="flex text-amber-400 text-xs">
                              <FaStar />
                            </div>
                            <span className="text-xs font-semibold text-black">
                              {product.rating?.rate}
                            </span>
                            <span className="text-xs text-gray-400">
                              ({product.rating?.count})
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                        <span className="text-lg sm:text-xl font-extrabold text-black">
                          ${product.price}
                        </span>

                        <button 
                          type="button"
                          onClick={() => addToCart(product, 1)}
                          className="bg-black text-white p-2.5 sm:p-3 rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-md"
                        >
                          <TiShoppingCart className="text-base sm:text-lg" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}