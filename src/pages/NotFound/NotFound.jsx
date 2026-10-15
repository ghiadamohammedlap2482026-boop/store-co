import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-[#F2F0F1] min-h-screen pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center text-center">
      <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
        <h1 className="text-8xl font-black text-black tracking-tight mb-2">404</h1>
        <h2 className="text-2xl font-extrabold text-black uppercase mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved to another URL.
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}