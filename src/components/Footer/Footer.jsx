import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/Frame 719.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-item">
              <h3 className="footer-title footer-logo">Istore</h3>
              <a className="footer-link">Subscribe</a>
              <p className="footer-desc">Get 10% off your first order</p>
              <div className="footer-item-icon">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
                <FontAwesomeIcon icon={faPaperPlane} className="footer-icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-item">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-list">
                <li>
                  111 Bijoy sarani, Dhaka,
                  <br /> DH 1515, Bangladesh.
                </li>
                <li>
                  <a href="/#">exclusive@gmail.com</a>
                </li>
                <li>
                  <a href="/#">+88015-88888-9999</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-item">
              <h3 className="footer-title">Account</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/login">Login / Register</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-item">
              <h3 className="footer-title">Quick Link</h3>
              <ul className="footer-list">
                <li>Privacy Policy</li>
                <li>
                  <Link to="/#">Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/#">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-item">
              <h3 className="footer-title footer-download">Download App</h3>
              <p className="footer-download-desc">
                Save $3 with App New User Only
              </p>
              <img src={image} alt="footer-img" />
              <ul className="footer-media-list">
                <li>
                  <a href="/#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        <span>&copy;</span> Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
