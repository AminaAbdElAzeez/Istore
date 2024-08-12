import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Rating from "../../components/Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRotate, faTruck } from "@fortawesome/free-solid-svg-icons";
import TopHead from "../../components/TopHead/TopHead";
import ProductsSlider from "../../components/Sale/ProductsSlider/ProductsSlider";
import CartContext from "../../Context/CartProvider";

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { cartItems, addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const product = products.find((b) => b.id === +id);

  const handleAddToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    const quantity = itemInCart ? parseInt(itemInCart.quantity) + 1 : 1;
    addToCart({ ...product, quantity });
  };

  const handleDecreaseQuantity = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart && itemInCart.quantity > 1) {
      const quantity = parseInt(itemInCart.quantity) - 1;
      addToCart({ ...product, quantity });
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout"); // Navigate to the Checkout page
  };

  return (
    <div className="product-details">
      <div className="container">
        <div className="row">
          {loading ? (
            <div>Loading...</div>
          ) : product ? (
            <>
              <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="product-details-img">
                  <img src={product.images[0]} alt="product-details-img" />
                </div>
                <div className="product-details-img">
                  <img src={product.thumbnail} alt="product-details-img" />
                </div>
                <div className="product-details-img">
                  <img src={product.images[0]} alt="product-details-img" />
                </div>
                <div className="product-details-img">
                  <img src={product.thumbnail} alt="product-details-img" />
                </div>
              </div>
              <div className="col-lg-5 col-md-8 col-sm-8">
                <div className="product-details-img product-details-big-img">
                  <img src={product.images[0]} alt="product-details-img" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product-details-info">
                  <h3 className="product-details-title">{product.title}</h3>
                  <Rating rate={product.rating} />
                  <p className="product-details-price">${product.price}</p>
                  <p className="product-details-desc">{product.description}</p>
                  <hr />
                  <div className="colors-content">
                    <span className="colors">Colours:</span>
                    <ul className="colors-list">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="size-content">
                    <span className="size">Size:</span>
                    <ul className="size-list">
                      <li>XS</li>
                      <li>S</li>
                      <li>M</li>
                      <li>L</li>
                      <li>XL</li>
                    </ul>
                  </div>
                  <div className="counter-buy-love">
                    <div className="product-counter">
                      <button onClick={() => handleAddToCart(product)}>
                        +
                      </button>
                      <p>
                        <b>
                          {(
                            cartItems.find((item) => item.id === product.id) ||
                            {}
                          ).quantity || 0}
                        </b>
                      </p>
                      <button
                        disabled={
                          (
                            cartItems.find((item) => item.id === product.id) ||
                            {}
                          ).quantity <= 1
                        }
                        onClick={() => handleDecreaseQuantity(product)}
                      >
                        -
                      </button>
                    </div>
                    <button onClick={handleBuyNow} className="product-buy">
                      Buy Now
                    </button>
                    <div
                      className="product-details-love-icon"
                      onClick={() => addToWishList({ ...product, quantity: 1 })}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="product-details-love"
                      />
                    </div>
                  </div>
                  <p className="product-details-price">
                    Total: $
                    {(
                      product.price *
                      ((cartItems.find((item) => item.id === product.id) || {})
                        .quantity || 0)
                    ).toFixed(2)}
                  </p>
                  <div className="product-service top-product-service">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="product-details-service-icon"
                    />
                    <div className="product-details-container">
                      <h5 className="product-details-service-title">
                        Free Delivery
                      </h5>
                      <input
                        type="text"
                        placeholder="Enter your postal code for Delivery Availability"
                      />
                    </div>
                  </div>
                  <div className="product-service bottom-product-service">
                    <FontAwesomeIcon
                      icon={faRotate}
                      className="product-details-service-icon"
                    />
                    <div className="product-details-container">
                      <h5 className="product-details-service-title">
                        Return Delivery
                      </h5>
                      <p>
                        Free 30 Days Delivery Returns. <a>Details</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>No data found</div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TopHead sub="Related Items" title="For You..." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ProductsSlider products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
