import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "products", element: <Products /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart/> },
        { path: "*", element: <NotFound/> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
}