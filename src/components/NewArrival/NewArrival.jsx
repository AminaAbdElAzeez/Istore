import image1 from "../../assets/ps5-slim-goedkope-playstation_large 1 (1).png";
import image2 from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import image3 from "../../assets/Frame 707 (1).png";
import image4 from "../../assets/652e82cd70aa6522dd785109a455904c (1).png";
import "./NewArrival.css";

function NewArrival() {
  return (
    <div className="new-arrival">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="new-arrival-img left-img">
              <img src={image1} alt="new-arrival" />
              <div className="new-arrival-text">
                <h4 className="new-arrival-title">PlayStation 5</h4>
                <p className="new-arrival-desc">
                  Black and White version of the PS5 <br />
                  coming out on sale.
                </p>
                <a className="new-arrival-link" href="/#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="new-arrival-img right-top">
                  <img src={image2} alt="new-arrival" />
                  <div className="new-arrival-text">
                    <h4 className="new-arrival-title">Women’s Collections</h4>
                    <p className="new-arrival-desc">
                      Featured woman collections that
                      <br /> give you another vibe.
                    </p>
                    <a className="new-arrival-link" href="/#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="new-arrival-img right-bottom">
                  <img src={image3} alt="new-arrival" />
                  <div className="new-arrival-text">
                    <h4 className="new-arrival-title">Speakers</h4>
                    <p className="new-arrival-desc">Amazon wireless speakers</p>
                    <a className="new-arrival-link" href="/#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="new-arrival-img right-bottom">
                  <img src={image4} alt="new-arrival" />
                  <div className="new-arrival-text">
                    <h4 className="new-arrival-title">Perfume</h4>
                    <p className="new-arrival-desc">GUCCI INTENSE OUD EDP</p>
                    <a className="new-arrival-link" href="/#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
