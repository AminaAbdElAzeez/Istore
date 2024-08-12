import ImageSlider from "../ImageSlider/ImageSlider";
import "./Slider.css";
import { v4 as uuidv4 } from "uuid";

function Slider() {
  return (
    <div className="slider-item2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ImageSlider itemId={uuidv4()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
