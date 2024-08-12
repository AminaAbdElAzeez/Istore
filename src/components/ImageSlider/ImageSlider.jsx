import { v4 as uuidv4 } from "uuid";
import image1 from "../../assets/Frame 560 (1).png";
import image2 from "../../assets/Frame 600.png";
import image3 from "../../assets/Frame 685.png";
import "./ImageSlider.css";

function ImageSlider({ itemId }) {
  const carouselId = `carousel-${itemId}`;

  return (
    <div id={carouselId} className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="slider" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="slider" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="slider" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageSlider;
