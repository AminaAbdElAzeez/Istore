import "./BottomAbout.css";

function BottomAbout({ image, title, desc }) {
  return (
    <section className="bottom-about">
      <div className="bottom-about-item">
        <div className="bottom-about-img">
          <img src={image} alt="Clients" />
        </div>
        <h3>{title}</h3>
        <p className="about-bottom-desc">{desc}</p>
        <ul className="about-list-bottom">
          <li>
            <a>
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BottomAbout;
