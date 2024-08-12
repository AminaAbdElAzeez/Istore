import TopHead from "../TopHead/TopHead";
import BrowseCategorySlider from "./BrowseCategorySlider/BrowseCategorySlider";

function BrowseCategories() {
  return (
    <div className="browse-categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <TopHead sub="Categories" title="Browse By Category" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <BrowseCategorySlider />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
