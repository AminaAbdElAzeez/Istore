import ProductsSlider from "./ProductsSlider/ProductsSlider";
import Timer from "./Timer/Timer";

function Sale() {
  return (
    <div className="sale" style={{ padding: "50px 0 20px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Timer />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ProductsSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
