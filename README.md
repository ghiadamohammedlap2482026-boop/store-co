# SHOP.CO - E-Commerce Application

A modern, responsive E-Commerce web application built with **React**, **React Router**, **Tailwind CSS**, and **Framer Motion**.

---

## Features

- **Product Listing & Filtering**: Filter products by category, price range, search query, and sort by price/rating.
- **Dynamic Search**: Live search bar in the Navbar synchronized with the products page.
- **Shopping Cart System**: Add to cart, adjust quantities, remove items, clear cart, and automatic badge counter update on the Navbar icon.
- **Product Details Page**: View product information, set quantities, select sizes, and see related products.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens.
- **Custom 404 Page**: Handled route fallbacks for non-existing pages.

---

## Tech Stack

- **Frontend**: React (Vite / CRA)
- **Routing**: React Router DOM (`createBrowserRouter`)
- **Styling**: Tailwind CSS
- **State Management**: React Context API (`CartContext`)
- **API Client**: Axios (Fake Store API)
- **Animations**: Framer Motion
- **Icons**: React Icons (`react-icons`)

---

## Project Structure

```text
src/
├── components/
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Layout/
│   │   └── Layout.jsx
│   └── Navbar/
│       └── Navbar.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── About/
│   │   └── About.jsx
│   ├── Cart/
│   │   └── Cart.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── NotFound/
│   │   └── NotFound.jsx
│   ├── ProductDetails/
│   │   └── ProductDetails.jsx
│   └── Products/
│       └── Products.jsx
├── App.jsx
├── index.css
└── main.jsx