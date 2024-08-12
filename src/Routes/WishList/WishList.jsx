import { useContext, useEffect, useState } from "react";
import RemoveProducts from "../../components/RemoveProducts/RemoveProducts";
import TopHead from "../../components/TopHead/TopHead";
import ProductsSlider from "../../components/Sale/ProductsSlider/ProductsSlider";
import CartContext from "../../Context/CartProvider";

const WishList = () => {
  const [products, setProducts] = useState([]);
  const { wishItems } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="wishlist" style={{ padding: "180px 0 50px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopHead sub="Your..." title={`WishList (${wishItems.length})`} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <RemoveProducts products={wishItems} />
          </div>
        </div>
        <hr style={{ marginBottom: "50px" }} />
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
    </section>
  );
};

export default WishList;
