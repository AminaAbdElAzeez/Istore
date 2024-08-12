import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter as Router
import { AuthProvider } from "./AuthContext/AuthContext";
import { CartProvider } from "./Context/CartProvider";
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
import Root from "./Routes/Root/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import Account from "./Routes/Account/Account";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LoginIn />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="account" element={<Account />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path=":categorey" element={<CategotreyProducts />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  </Router>
);
