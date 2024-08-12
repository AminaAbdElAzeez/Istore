import {
  faDollar,
  faDollarSign,
  faShop,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MiddleAbout.css";

function MiddleAbout() {
  return (
    <div className="middle-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="middle-about-item">
              <div className="middle-about-item-icon">
                <FontAwesomeIcon
                  icon={faShop}
                  className="middle-about-item-icon-item"
                />
              </div>
              <h4 className="middle-about-item-title">10.5K</h4>
              <p className="middle-about-item-desc">Sallers active our site</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="middle-about-item">
              <div className="middle-about-item-icon">
                <FontAwesomeIcon
                  icon={faDollar}
                  className="middle-about-item-icon-item"
                />
              </div>
              <h4 className="middle-about-item-title">33K</h4>
              <p className="middle-about-item-desc">Mopnthly Produduct Sale</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="middle-about-item">
              <div className="middle-about-item-icon">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="middle-about-item-icon-item"
                />
              </div>
              <h4 className="middle-about-item-title">45.5K</h4>
              <p className="middle-about-item-desc">
                Customer active in our site
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="middle-about-item">
              <div className="middle-about-item-icon">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="middle-about-item-icon-item"
                />
              </div>
              <h4 className="middle-about-item-title">25K</h4>
              <p className="middle-about-item-desc">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleAbout;
