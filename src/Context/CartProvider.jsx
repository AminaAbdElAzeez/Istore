import { useContext, useState } from "react";
import CartContext from "./CartContext";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // تعديل من history إلى navigate

  // Handle Add To Cart
  const addToCart = (item, qty) => {
    if (!user) {
      navigate("/signup"); // تعديل من history("/signup") إلى navigate("/signup")
    } else {
      const isExist = cartItems.find((cart) => cart.id === item.id);
      if (isExist) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id ? item : cartItem
          )
        );
      } else {
        setCartItems((prev) => [...prev, item]);
      }
    }
  };

  // Handle Add To Wishlist
  const addToWishList = (item, qty) => {
    if (!user) {
      navigate("/signup"); // تعديل من history.push("/signup") إلى navigate("/signup")
    } else {
      const isExist = wishItems.find((wishItem) => wishItem.id === item.id);
      if (isExist) {
        setWishItems(
          wishItems.map((wishItem) =>
            wishItem.id === item.id ? item : wishItem
          )
        );
      } else {
        setWishItems((prev) => [...prev, item]);
      }
    }
  };

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((c) => c.id !== id);
    setCartItems(cart);
  };

  // Handle Remove From Wishlist
  const removeFromWishlist = (id) => {
    const cart = wishItems.filter((c) => c.id !== id);
    setWishItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addToWishList,
        wishItems,
        removeFromWishlist,
        cartItemsLength: cartItems.length,
        wishListItemsLength: wishItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
