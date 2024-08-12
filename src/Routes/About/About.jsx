import MiddleAbout from "../../components/MiddleAbout/MiddleAbout";
import TopAbout from "../../components/TopAbout/TopAbout";
import image1 from "../../assets/Frame 874.png";
import image2 from "../../assets/Frame 875.png";
import image3 from "../../assets/Frame 876.png";
import BottomAbout from "../../components/BottomAbout/BottomAbout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Services from "../../components/Services/Services";
import "./About.css";

function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 584,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about">
      <TopAbout />
      <MiddleAbout />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <BottomAbout
                image={image1}
                title="Tom Cruise"
                desc="Founder & Chairman"
              />
              <BottomAbout
                image={image2}
                title="Emma Watson"
                desc="Managing Director"
              />
              <BottomAbout
                image={image3}
                title="Will Smith"
                desc="Will Smith"
              />
              <BottomAbout
                image={image1}
                title="Tom Cruise"
                desc="Founder & Chairman"
              />
              <BottomAbout
                image={image2}
                title="Emma Watson"
                desc="Managing Director"
              />
              <BottomAbout
                image={image3}
                title="Will Smith"
                desc="Will Smith"
              />
            </Slider>
          </div>
        </div>
      </div>
      <Services />
    </section>
  );
}

export default About;
