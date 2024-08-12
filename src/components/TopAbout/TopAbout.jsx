import image from "../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import "./TopAbout.css";

function TopAbout() {
  return (
    <section className="top-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="top-about-title">Our Story</h2>
            <p className="top-about-desc">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="top-about-desc">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="about-top-img">
              <img src={image} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopAbout;
