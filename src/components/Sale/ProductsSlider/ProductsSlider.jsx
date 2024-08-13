import { useContext, useEffect, useState } from "react";
import "./ProductsSlider.css";
import Rating from "../../Rating/Rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modal/Modal";
import CartContext from "../../../Context/CartProvider";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

function ProductsSlider() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Modal
  const openModalHandler = (item) => {
    setOpenModal(true);
    setCartData(item);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 584,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(CartContext);

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
  // console.log(cartData);
  return (
    <div className="product-slider">
      {loading ? (
        <Spinner />
      ) : (
        <Slider {...settings}>
          {products.map((product) => {
            const discountedPrice =
              product.price -
              product.price * (product.discountPercentage / 100);
            return (
              <div className="slider-content" key={product.id}>
                <div className="slider-img">
                  <img src={product.images[0]} alt={product.title} />
                  <div className="slider-layer">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <a
                    className="add-to-cart"
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                  >
                    Add To Cart
                  </a>
                  <ul className="icons-list">
                    <li>
                      <a
                        className="view"
                        onClick={() => openModalHandler(product)}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                    </li>
                    <li>
                      <a
                        className="heart"
                        onClick={() =>
                          addToWishList({ ...product, quantity: 1 })
                        }
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="slider-title">{product.title.slice(0, 16)}</h3>
                <span className="slider-price">
                  ${product.price.toFixed(2)}
                </span>
                <span className="sale-price">
                  ${discountedPrice.toFixed(2)}
                </span>
                <Rating rate={product.rating} />
                <p className="sale">- {product.discountPercentage}%</p>
              </div>
            );
          })}
        </Slider>
      )}
      <Link to="shop" className="view-all">
        View All Products
      </Link>
      <hr />
      {openModal && <Modal cartData={cartData} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default ProductsSlider;
