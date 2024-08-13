import { useEffect, useState } from "react";
import Products from "../Products/Products";
import TopHead from "../TopHead/TopHead";
import "./BestProducts.css";
import Spinner from "../Spinner/Spinner";

function BestProducts() {
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
  const filteredProducts = products.filter((product) => product.rating >= 4.7);

  return (
    <div className="best-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopHead sub="This Month" title="Best Selling Products" />
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

export default BestProducts;
