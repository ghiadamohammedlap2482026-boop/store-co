import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaStar, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);

        const relatedRes = await axios.get(
          `https://fakestoreapi.com/products/category/${response.data.category}`
        );
        setRelatedProducts(relatedRes.data.filter((item) => item.id !== Number(id)).slice(0, 4));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
          <div className="bg-gray-200 h-[450px] rounded-3xl"></div>
          <div className="space-y-4">
            <div className="bg-gray-200 h-8 rounded w-3/4"></div>
            <div className="bg-gray-200 h-6 rounded w-1/4"></div>
            <div className="bg-gray-200 h-24 rounded w-full"></div>
            <div className="bg-gray-200 h-12 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 text-center">
        <h2 className="text-2xl font-bold">Product not found!</h2>
        <Link to="/products" className="text-blue-600 underline mt-4 inline-block">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-xs sm:text-sm text-gray-500 mb-8 capitalize flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-black">Products</Link>
          <span>/</span>
          <span className="text-black font-semibold truncate">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="bg-[#F0EEED] rounded-3xl p-8 w-full h-[400px] sm:h-[480px] flex items-center justify-center relative overflow-hidden">
              <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <FaRegHeart className="text-lg" />
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-3">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400 text-sm">
                  <FaStar />
                </div>
                <span className="text-sm font-bold text-black">
                  {product.rating?.rate}
                </span>
                <span className="text-xs text-gray-400">
                  ({product.rating?.count} reviews)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-extrabold text-black">
                  ${product.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-6">
                {product.description}
              </p>

              <div className="mb-6">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-black text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
              
              <div className="bg-gray-100 rounded-full px-5 py-3 flex items-center justify-between gap-6 w-full sm:w-auto">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <FaMinus className="text-xs" />
                </button>
                <span className="font-bold text-sm text-black">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>

              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 w-full bg-black text-white text-sm font-semibold py-3.5 px-8 rounded-full hover:bg-gray-800 transition-all active:scale-98 flex items-center justify-center gap-2 shadow-lg"
              >
                <TiShoppingCart className="text-xl" /> Add to Cart
              </button>
            </div>

          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight text-center mb-10">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  to={`/product/${relProduct.id}`}
                  className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="bg-[#F0EEED] rounded-2xl p-6 h-48 flex items-center justify-center mb-4">
                    <img
                      src={relProduct.image}
                      alt={relProduct.title}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-sm line-clamp-1 group-hover:text-gray-600">
                      {relProduct.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-extrabold text-black text-lg">
                        ${relProduct.price}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                        <FaStar /> {relProduct.rating?.rate}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}