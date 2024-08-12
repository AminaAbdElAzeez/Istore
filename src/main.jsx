import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Root from "./Routes/Root/Root.jsx";
import ErrorPage from "./Routes/ErrorPage/ErrorPage.jsx";
import Home from "./Routes/Home/Home.jsx";
import SignUp from "./Routes/SignUp/SignUp.jsx";
import LoginIn from "./Routes/LoginIn/LoginIn.jsx";
import WishList from "./Routes/WishList/WishList.jsx";
import CheckOut from "./Routes/CheckOut/CheckOut.jsx";
import Contact from "./Routes/Contact/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Routes/Cart/Cart.jsx";
import About from "./Routes/About/About.jsx";
import CategotreyProducts from "./Routes/CategotreyProducts/CategotreyProducts.jsx";
import CartProvider from "./Context/CartProvider.jsx";
import Shop from "./Routes/Shop/Shop.jsx";
import ProductDetails from "./Routes/ProductDetails/ProductDetails.jsx";
import { AuthProvider } from "./AuthContext/AuthContext.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":categorey",
        element: <CategotreyProducts />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LoginIn />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
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
