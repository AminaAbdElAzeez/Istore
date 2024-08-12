import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BottomHeader.css";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../Context/CartProvider";
import { AuthContext } from "../../../AuthContext/AuthContext";

function BottomHeader() {
  const { cartItemsLength } = useContext(CartContext);
  const { wishListItemsLength } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/#">
          Exclusive
        </a>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
          <form className="d-flex form" role="search">
            <input
              className="search-input"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <button className="icon search-icon" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-item" />
            </button>
          </form>
        </div>
        <div className="icon-box nav-love-wrapper">
          <Link className="icon" to="wishlist">
            {wishListItemsLength > 0 && (
              <b className="love-notifications">{wishListItemsLength}</b>
            )}
            <FontAwesomeIcon icon={faHeart} className="icon-item icon2" />
          </Link>
          <Link className="icon nav-cart-wrapper" to="cart">
            {cartItemsLength > 0 && (
              <b className="cart-notifications">{cartItemsLength}</b>
            )}
            <FontAwesomeIcon
              icon={faCartShopping}
              className="icon-item icon2"
            />
          </Link>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <link to="login">Login</link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default BottomHeader;
