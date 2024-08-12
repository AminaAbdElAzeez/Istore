import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
import "./CategoryProducts.css";
import TopHead from "../../components/TopHead/TopHead";
import Spinner from "../../components/Spinner/Spinner";

function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const { categorey } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const filteredProducts =
    categorey === "Beauty"
      ? products.slice(0, 5)
      : categorey === "Fragrances"
      ? products.slice(5, 10)
      : categorey === "Furniture"
      ? products.slice(10, 15)
      : categorey === "Groceries"
      ? products.slice(15, 42)
      : "";

  return (
    <div className="category-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopHead title={categorey} sub="Our Products in..." />
          </div>
          <div className="col-lg-12">
            {filteredProducts.length > 0 ? (
              <Products products={filteredProducts} />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
