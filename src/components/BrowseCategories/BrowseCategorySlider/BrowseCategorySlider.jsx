import { useEffect, useState } from "react";
import "./BrowseCategorySlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  faBasketShopping,
  faCity,
  faPalette,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

function BrowseCategorySlider() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="browse-category-slider">
      {loading ? (
        <Spinner />
      ) : (
        <Slider {...settings}>
          {categories.slice(0, 4).map((cat) => {
            return (
              <Link
                className="browse-category-item"
                key={cat.name}
                to={cat.name}
              >
                {cat.name === "Beauty" ? (
                  <FontAwesomeIcon
                    icon={faPalette}
                    className="category-slide-icon"
                  />
                ) : cat.name === "Fragrances" ? (
                  <FontAwesomeIcon
                    icon={faWandMagicSparkles}
                    className="category-slide-icon"
                  />
                ) : cat.name === "Furniture" ? (
                  <FontAwesomeIcon
                    icon={faCity}
                    className="category-slide-icon"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    className="category-slide-icon"
                  />
                )}
                <h4>{cat.name}</h4>
              </Link>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

export default BrowseCategorySlider;
