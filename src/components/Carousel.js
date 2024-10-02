import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const productSlider = [
    {
      id: 1,
      description: "A beautiful sunset casting golden hues over the mountain peaks.",
    },
    {
      id: 2,
      description: "Crystal clear blue ocean waves crashing onto the shore.",
    },
    {
      id: 3,
      description: "A serene forest shrouded in morning mist.",
    },
    {
      id: 4,
      description: "A tranquil lake surrounded by towering mountains.",
    },
    {
      id: 5,
      description: "A breathtaking night sky filled with stars.",
    },
  ];

  // Define the NextArrow component
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute -right-4 top-1/2 transform -translate-y-1/2 z-15 mx-6 text-black `}
        onClick={onClick}
      >
         <button className=" text-white p-2 rounded-full "> <IoIosArrowForward className="text-black text-2xl"/></button>
         </div>
    );
  };

  // Define the PrevArrow component
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={` absolute right-10 top-1/2 transform -translate-y-1/2 z-10 mx-6 `}
        onClick={onClick}
      >
        <button className="   text-white p-2 Z-1000 rounded-full"><IoIosArrowBack className="text-black text-2xl"/> </button>
     
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow  />,
    
  };

  return (
    <div className="carousel-container relative overflow-hidden mx-6 flex justify-start items-start ">
       <h2 className="mt-2 border py-4 px-5 font-bold bg-[#094998] text-white text-2xl ">Breaking News</h2>
      <Slider {...settings} className="w-[1020px]">
        {productSlider.map((p) => (
          <div key={p.id} className="flex justify-start items-start h-24  py-2">
            <div className="w-full bg-green-100  shadow-sm p-5">
              <p className="text-black text-start text-xl">{p.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
