import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slider-settings",
    arrows: false,
    pauseOnHover: true,
    dotsClass: "dots-sett",
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="/public/New imgs/miks-prezentaciyasandemuse.jpg"
          alt="news"
          className="slider-img"
        />
      </div>
      <div>
        <img
          src="/public/New imgs/ntb-kolyada-vid-kozhushkiv.png"
          alt="news"
          className="slider-img"
        />
      </div>
      <div>
        <img
          src="/public/New imgs/tecol-47068998711197848133222143328561145613354872n-t.jpg"
          alt="news"
          className="slider-img"
        />
      </div>
      <div>
        <img
          src="/public/New imgs/tsus-47135481611008254953878302266073551647608673n-t.jpg"
          alt="news"
          className="slider-img"
        />
      </div>
    </Slider>
  );
}
