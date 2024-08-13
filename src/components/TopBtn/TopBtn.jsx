import { Fragment, useEffect, useState } from "react";
import "./TopBtn.css";

function TopBtn() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {top && (
        <button onClick={scrollUp} className="top-btn">
          <i className="bi bi-chevron-double-up"></i>
        </button>
      )}
    </Fragment>
  );
}

export default TopBtn;
