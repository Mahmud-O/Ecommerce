import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../assets/img/slider-image-3-BtMvVf4V.jpeg';
import SliderImage2 from '../../assets/img/slider-image-2-Xt88XJy9.jpeg';
import SliderImage3 from '../../assets/img/10607573.jpg';
import SliderImage4 from '../../assets/img/laptop_12.jpg';
import SliderImage5 from '../../assets/img/mark-konig-Tl8mDaue_II-unsplash.jpg';
import SliderImage6 from '../../assets/img/photo-14.jpg';
import SliderImage7 from '../../assets/img/product shop.jpg';

const images = [
  { src: SliderImage1, alt: "Slider Image 1" },
  { src: SliderImage2, alt: "Slider Image 2" },
  { src: SliderImage3, alt: "Slider Image 3" },
  { src: SliderImage4, alt: "Slider Image 4" },
  { src: SliderImage5, alt: "Slider Image 5" },
  { src: SliderImage6, alt: "Slider Image 6" },
  { src: SliderImage7, alt: "Slider Image 7" },
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="editorial-slick">
      <style>{`
        .editorial-slick .slick-dots li button:before { color: #E4572E; opacity: 0.35; font-size: 10px; }
        .editorial-slick .slick-dots li.slick-active button:before { color: #E4572E; opacity: 1; }
        .editorial-slick .slick-prev, .editorial-slick .slick-next { width: 40px; height: 40px; border: 2px solid #191410; border-radius: 9999px; background: #FAF6F0; z-index: 10; }
        .editorial-slick .slick-prev { left: 12px; }
        .editorial-slick .slick-next { right: 12px; }
        .editorial-slick .slick-prev:before, .editorial-slick .slick-next:before { color: #191410; font-size: 18px; opacity: 1; }
        .editorial-slick .slick-prev:hover, .editorial-slick .slick-next:hover { background: #FFB627; }
      `}</style>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.alt} className="px-1">
            <div className="overflow-hidden rounded-2xl border-2 border-ink">
              <img src={image.src} alt={image.alt} className="h-80 w-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
