import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((c) => c.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishItems(wishItems.filter((c) => c.id !== id));
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

export default CartContext;
