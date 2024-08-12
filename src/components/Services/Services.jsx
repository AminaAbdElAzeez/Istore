import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.css";
import {
  faCircleCheck,
  faHeadphones,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="service-item">
              <div className="services-icons">
                <FontAwesomeIcon icon={faTruck} className="service-icon" />
              </div>
              <h4 className="service-title">FREE AND FAST DELIVERY</h4>
              <p className="service-desc">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item">
              <div className="services-icons">
                <FontAwesomeIcon icon={faHeadphones} className="service-icon" />
              </div>
              <h4 className="service-title">24/7 CUSTOMER SERVICE</h4>
              <p className="service-desc">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service-item">
              <div className="services-icons">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="service-icon"
                />
              </div>
              <h4 className="service-title">MONEY BACK GUARANTEE</h4>
              <p className="service-desc">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
