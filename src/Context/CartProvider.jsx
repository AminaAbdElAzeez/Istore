import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory

  // Handle Add To Cart
  const addToCart = (item) => {
    if (!user) {
      navigate("/signup");
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
  const addToWishList = (item) => {
    if (!user) {
      navigate("/signup");
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
    const wish = wishItems.filter((c) => c.id !== id);
    setWishItems(wish);
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
