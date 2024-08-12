import { useEffect, useState } from "react";
import Products from "../Products/Products";
import TopHead from "../TopHead/TopHead";
import "./BestProducts.css";

function BestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log("Number of products:", data.products.length);
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
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
