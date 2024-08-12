import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="top-header-desc">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="/#">ShopNow</a>
            </p>
            <select className="top-lang">
              <option value="en">english</option>
              <option value="ar">arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
