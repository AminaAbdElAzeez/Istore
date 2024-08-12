import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext/AuthContext";
import Root from "./Routes/Root/Root";
import ErrorPage from "./Routes/ErrorPage/ErrorPage";
import Home from "./Routes/Home/Home";
import SignUp from "./Routes/SignUp/SignUp";
import LoginIn from "./Routes/LoginIn/LoginIn";
import WishList from "./Routes/WishList/WishList";
import CheckOut from "./Routes/CheckOut/CheckOut";
import Contact from "./Routes/Contact/Contact";
import Cart from "./Routes/Cart/Cart";
import About from "./Routes/About/About";
import CategotreyProducts from "./Routes/CategotreyProducts/CategotreyProducts";
import Shop from "./Routes/Shop/Shop";
import ProductDetails from "./Routes/ProductDetails/ProductDetails";
import CartProvider from "./Context/CartProvider.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: ":categorey", element: <CategotreyProducts /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LoginIn /> },
      { path: "wishlist", element: <WishList /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "shop", element: <Shop /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/error", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </AuthProvider>
);
