import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";

function Rating({ rate }) {
  return (
    <div className="ratting">
      {rate >= 1 ? (
        <FontAwesomeIcon icon={faStar} className="rate-icon" />
      ) : rate >= 0.5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} className="rate-icon" />
      ) : (
        <FontAwesomeIcon icon={faStar} className="rate-icon dis-rate" />
      )}
      {rate >= 2 ? (
        <FontAwesomeIcon icon={faStar} className="rate-icon" />
      ) : rate >= 1.5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} className="rate-icon" />
      ) : (
        <FontAwesomeIcon icon={faStar} className="rate-icon dis-rate" />
      )}
      {rate >= 3 ? (
        <FontAwesomeIcon icon={faStar} className="rate-icon" />
      ) : rate >= 2.5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} className="rate-icon" />
      ) : (
        <FontAwesomeIcon icon={faStar} className="rate-icon dis-rate" />
      )}
      {rate >= 4 ? (
        <FontAwesomeIcon icon={faStar} className="rate-icon" />
      ) : rate >= 3.5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} className="rate-icon" />
      ) : (
        <FontAwesomeIcon icon={faStar} className="rate-icon dis-rate" />
      )}
      {rate >= 5 ? (
        <FontAwesomeIcon icon={faStar} className="rate-icon" />
      ) : rate >= 4.5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} className="rate-icon" />
      ) : (
        <FontAwesomeIcon icon={faStar} className="rate-icon dis-rate" />
      )}
      <span>({rate})</span>
    </div>
  );
}

export default Rating;
