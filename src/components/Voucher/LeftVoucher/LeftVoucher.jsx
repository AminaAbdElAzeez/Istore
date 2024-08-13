import { useEffect, useState } from "react";
import "./LeftVoucher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

function LeftVoucher() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="categories-list">
          {categories.slice(0, 4).map((category, index) => (
            <li key={index}>
              <Link to={category.name}>{category.name}</Link>
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="arrow-voucher"
                />
              </span>
            </li>
          ))}
          <li>
            <Link to="shop">View All</Link>
            <span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow-voucher"
              />
            </span>
          </li>
        </ul>
      )}
    </>
  );
}

export default LeftVoucher;
