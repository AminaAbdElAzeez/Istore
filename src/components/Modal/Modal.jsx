import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Context/CartProvider";
import "./Modal.css";

const Modal = ({ cartData, setOpenModal }) => {
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { title, images, price, rating, category, stock, id } = cartData;
  return (
    <div className="modal-container" onClick={() => setOpenModal(false)}>
      <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => setOpenModal(false)}
          className="close-modal"
        />
        <div className="container">
          <div className="modal-content-items">
            <div className="modal-content-img">
              <img src={images[0]} alt={title} />
            </div>
            <div className="modal-content-info">
              <h2 className="modal-content-info-title">{title}</h2>
              <p className="modal-content-info-stock">
                <b>Stock</b> : {stock ? "in Stock" : "Not in Stock"}
              </p>
              <Rating rate={rating} />
              <p className="modal-content-info-category">
                <b>Category</b> : {category}
              </p>
              <p className="modal-content-info-price">
                <b>Price</b> : ${price}
              </p>
              <div className="modal-add-to-cart">
                <input
                  className="modal-add-to-cart-input"
                  type="number"
                  min="1"
                  max="100"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
                <button
                  className="modal-add-to-cart-btn"
                  onClick={() => addToCart({ ...cartData, quantity: qty })}
                >
                  <FontAwesomeIcon icon={faCartPlus} className="cart-modal" />
                  add to cart
                </button>
              </div>
              <Link
                to={`/products/${id}`}
                className="modal-content-info-link"
                onClick={() => setOpenModal(false)}
              >
                see more details...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
