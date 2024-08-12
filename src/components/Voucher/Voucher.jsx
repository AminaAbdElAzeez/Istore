import ImageSlider from "../ImageSlider/ImageSlider";
import LeftVoucher from "./LeftVoucher/LeftVoucher";
import "./Voucher.css";
import { v4 as uuidv4 } from "uuid";

function Voucher() {
  return (
    <div className="voucher">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <LeftVoucher />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <ImageSlider itemId={uuidv4()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
