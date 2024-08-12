import { useEffect, useState } from "react";
import Products from "../Products/Products";
import TopHead from "../TopHead/TopHead";

function ExploreProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
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
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
