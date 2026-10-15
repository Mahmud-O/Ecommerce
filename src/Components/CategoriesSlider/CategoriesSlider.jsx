import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rloader from "../Loader/ScaleLoader";
import useAllCategories from "../../CustomHooks/useAllCategories.jsx";



export default function CategorySlider() {


  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],

  };


  const { data, isLoading, isError } = useAllCategories();



  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center rounded-2xl border-2 border-ink bg-paper-deep p-12">
        <h2 className="font-display text-2xl font-bold text-brick">Error Fetching Categories</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Rloader />
    );
  }


  return (

    <div className="slider-container editorial-slick">
      <style>{`
        .editorial-slick .slick-dots li button:before { color: #E4572E; opacity: 0.35; font-size: 10px; }
        .editorial-slick .slick-dots li.slick-active button:before { color: #E4572E; opacity: 1; }
        .editorial-slick .slick-prev, .editorial-slick .slick-next { width: 40px; height: 40px; border: 2px solid #191410; border-radius: 9999px; background: #FAF6F0; z-index: 10; }
        .editorial-slick .slick-prev { left: -8px; }
        .editorial-slick .slick-next { right: -8px; }
        .editorial-slick .slick-prev:before, .editorial-slick .slick-next:before { color: #191410; font-size: 18px; opacity: 1; }
        .editorial-slick .slick-prev:hover, .editorial-slick .slick-next:hover { background: #FFB627; }
      `}</style>
      <Slider {...settings}  >
        {data.data.data.map((category) => (
          <div key={category._id} className="category-item p-2">
            <div className="hard-shadow-sm rounded-2xl border-2 border-ink bg-paper p-2 transition-transform hover:-translate-y-1">
              <img src={category.image} alt={category.name} className="h-28 w-full rounded-xl border-2 border-ink object-cover" />
              <h3 className="font-display mt-2 truncate text-center text-sm font-bold text-ink">{category.name}</h3>
            </div>
          </div>
        ))}

      </Slider></div>
  );
}
