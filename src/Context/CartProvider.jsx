import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // استرجاع بيانات cart و wishlist عند تسجيل الدخول
      const storedCartItems =
        JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];
      const storedWishItems =
        JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
      setCartItems(storedCartItems);
      setWishItems(storedWishItems);
    } else {
      // مسح بيانات cart و wishlist إذا لم يكن هناك مستخدم
      setCartItems([]);
      setWishItems([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      // تخزين بيانات cart و wishlist عند التحديث
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
      localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishItems));
    }
  }, [cartItems, wishItems, user]);

  const addToCart = (item) => {
    if (!user) {
      navigate("/signup");
    } else {
      const isExist = cartItems.find((cart) => cart.id === +item.id);
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

  const clearCart = () => {
    setCartItems([]);
  };

  const clearWishlist = () => {
    setWishItems([]);
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
        clearCart,
        clearWishlist,
        cartItemsLength: cartItems.length,
        wishListItemsLength: wishItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
