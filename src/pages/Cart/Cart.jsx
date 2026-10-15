import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 0 ? subtotal * 0.1 : 0;
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-extrabold text-black uppercase mb-3">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          to="/products"
          className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-semibold">Cart</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-xs sm:text-sm font-bold text-red-500 hover:underline"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-between gap-4 pb-6 ${
                  index !== cartItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F0EEED] rounded-2xl p-2 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-black text-sm sm:text-base line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 capitalize mt-0.5">
                        {item.category}
                      </p>
                    </div>
                    <span className="text-lg font-black text-black mt-2">
                      ${item.price}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between h-full gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors text-base"
                  >
                    <FaTrash />
                  </button>

                  <div className="bg-[#F0EEED] rounded-full px-3 py-1.5 flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="text-xs text-gray-600 hover:text-black"
                    >
                      <FaMinus />
                    </button>
                    <span className="font-bold text-xs sm:text-sm text-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-xs text-gray-600 hover:text-black"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-extrabold text-black mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-gray-100 pb-6 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Discount (-10%)</span>
                <span className="font-bold text-red-500">
                  -${discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-between text-base sm:text-lg font-extrabold text-black my-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white text-sm font-semibold py-4 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98">
              Go to Checkout <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}