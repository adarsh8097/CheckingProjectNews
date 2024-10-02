import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TopNewCarousel = () => {
  const productSlider = [
    {
      id: 1,
      title: "Sunset Over the Mountains",
      description: "A beautiful sunset casting golden hues over the mountain peaks.",
      imageUrl: "../Assets/images/politics1.jpg",
    },
    {
      id: 2,
      title: "Ocean Waves",
      description: "Crystal clear blue ocean waves crashing onto the shore.",
      imageUrl: "../Assets/images/politics2.jpg",
    },
    {
      id: 3,
      title: "Misty Forest",
      description: "A serene forest shrouded in morning mist.",
      imageUrl: "../Assets/images/politics2.avif",
    },
    {
      id: 4,
      title: "Mountain Lake",
      description: "A tranquil lake surrounded by towering mountains.",
      imageUrl: "../Assets/images/politics4.jpg",
    },
    {
      id: 5,
      title: "Starry Night",
      description: "A breathtaking night sky filled with stars.",
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container  overflow-hidden   mx-6">
      <Slider {...settings} className="w-[520px]">
        {productSlider.map((p) => (
          <div key={p.id} className="flex justify-center items-center h-48">
            <div className="w-full bg-white rounded-lg  overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full object-cover h-72"
              />
              {/* <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{p.title}</h2>
                <p className="text-gray-600">{p.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
      <div>
      <p className='w-[520px] leading-relaxed mt-2 mb-4 text-gray-400' >
        Trump warned <Link href="#" className="underline"> will jail election officials</Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; 
        vowed to pardon January 6 rioters; railed against women who accused him of sexual misconduct
        </p>
      </div>
    </div>
  );
};

export default TopNewCarousel;
