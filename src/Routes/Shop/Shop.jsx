import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import "./Shop.css";
import Spinner from "../../components/Spinner/Spinner";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search in Products..."
              className="shop-input"
            />
          </div>
        </div>
        <div className="col-lg-12">
          {loading ? (
            <Spinner />
          ) : search && filteredProducts.length === 0 ? (
            <p className="no-data">No Data 🤷‍♂️😳.</p>
          ) : (
            <Products products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
