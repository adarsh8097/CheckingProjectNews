import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BreakingHeadLine = () => {
  const productSlider = [
    {
      id: 1,
      title: "Sunset Over the Mountains",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics1.jpg",
    },
    {
      id: 2,
      title: "Ocean Waves",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics2.jpg",
    },
    {
      id: 3,
      title: "Misty Forest",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics2.avif",
    },
    {
      id: 4,
      title: "Mountain Lake",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics4.jpg",
    },
    {
      id: 5,
      title: "Starry Night",
      description:"Elections 2024: Live updates Trump set to face off in first debate tomorrow",
      imageUrl: "../Assets/images/politics6.jpg",
    },
  ];

  // Define the NextArrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 z-10 mx-6`}
        onClick={onClick}
      >
        {/* <button className="p-3 rounded-full text-white bg-black">➡️</button> */}
      </div>
    );
  };

  // Define the PrevArrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mx-6`}
        onClick={onClick}
      >
        {/* <button className="p-3 rounded-full text-white bg-black">⬅️</button> */}
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1800,
    slidesToShow: 2, // Show two items at a time
    slidesToScroll: 1, // Slide one at a time
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true,
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <Slider {...settings} className="w-[620px] ">
        {productSlider.map((p) => (
          <div key={p.id} className=" justify-center items-center h-48">
            <div className="w-full flex flex-row bg-white rounded-lg  overflow-hidden cursor-pointer">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-48 h-[130px] object-cover"
              />
              <div className="p-4">
                {/* <h2 className="text-xl font-bold mb-2">{p.title}</h2> */}
                <p className="text-black text-lg w-48 -mt-1">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BreakingHeadLine;
