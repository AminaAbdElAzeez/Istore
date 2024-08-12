import "./Products.css";
import Rating from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import CartContext from "../../Context/CartContext";

function Products({ products }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [cartData, setCartData] = useState(null);

  // Handle Modal
  const openModalHandler = (item) => {
    setOpenModal(true);
    setCartData(item);
  };

  return (
    <div className="product">
      {products.map((product) => {
        const total = product.discountPercentage + product.price;
        return (
          <div className="product-content" key={product.id}>
            <div className="product-img">
              <img src={product.images[0]} alt={product.title} />
              <div className="product-layer">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <a
                className="add-to-cart-product"
                onClick={() => addToCart({ ...product, quantity: 1 })}
              >
                Add To Cart
              </a>
              <ul className="icons-list-product">
                <li>
                  <a onClick={() => openModalHandler(product)}>
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </li>
                <li>
                  <a onClick={() => addToWishList({ ...product, quantity: 1 })}>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="product-title">{product.title.slice(0, 16)}</h3>
            <span className="product-price">${product.price}</span>
            <span className="product-price-sale">${Math.trunc(total)}</span>
            <Rating rate={product.rating} />
            <p className="sale-product">- {product.discountPercentage}$</p>
          </div>
        );
      })}
      <Link to="/shop" className="view-all-product">
        View All Products
      </Link>
      {openModal && <Modal cartData={cartData} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Products;
