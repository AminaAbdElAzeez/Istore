import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BottomHeader.css";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../Context/CartProvider";
import { AuthContext } from "../../../AuthContext/AuthContext";

function BottomHeader() {
  const { cartItemsLength, clearCart } = useContext(CartContext);
  const { wishListItemsLength, clearWishlist } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const navbarStyles = ({ isActive }) => ({
    color: isActive ? "#db4444" : "#000",
    fontWeight: isActive ? "700" : "500",
  });

  const handleLogout = () => {
    clearCart();
    clearWishlist();
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Exclusive
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                style={navbarStyles}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="contact"
                style={navbarStyles}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/about"
                style={navbarStyles}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/signup"
                style={navbarStyles}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <form className="d-flex form" role="search">
            <input
              className="search-input"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-item" />
            <ul className="header-icons-list">
              <li className="wishlist-icon-header">
                <NavLink className="" to="wishlist" style={navbarStyles}>
                  {wishListItemsLength > 0 && (
                    <b className="love-notifications">{wishListItemsLength}</b>
                  )}
                  <FontAwesomeIcon icon={faHeart} />
                </NavLink>
              </li>
              <li className="cart-icon-header">
                <NavLink className="" to="cart" style={navbarStyles}>
                  {cartItemsLength > 0 && (
                    <b className="cart-notifications">{cartItemsLength}</b>
                  )}
                  <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
              </li>
              <li>
                {user ? (
                  <div className="last-li">
                    <NavLink style={navbarStyles} to="account">
                      <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
                  <Link to="login" className="login-header">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default BottomHeader;
