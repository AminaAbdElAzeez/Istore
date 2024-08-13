import { useEffect, useState } from "react";
import Products from "../Products/Products";
import TopHead from "../TopHead/TopHead";
import Spinner from "../Spinner/Spinner";

function ExploreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);
  const filteredProducts = products.slice(5, 13);

  return (
    <div className="explore-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopHead sub="Our Products" title="Explore Our Products" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {loading ? <Spinner /> : <Products products={filteredProducts} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
