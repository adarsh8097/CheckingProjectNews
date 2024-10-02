import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const TrendingTopics = () => {
  const trendingTopics = [
    { id: 1, hashtag: "#Modi" },
    { id: 2, hashtag: "#Science" },
    { id: 3, hashtag: "#Sports" },
    { id: 4, hashtag: "#Technology" },
    { id: 5, hashtag: "#Entertainment" },
    { id: 6, hashtag: "#Health" },
    { id: 7, hashtag: "#Politics" },
    { id: 8, hashtag: "#Education" },
    { id: 9, hashtag: "#Travel" },
    { id: 10, hashtag: "#Business" },
  ];

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={'absolute  -right-7 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'}
        onClick={onClick}
      >
        <button className="bg-gray-200 text-white p-2 rounded-full"> <IoIosArrowForward className="text-black"/></button>
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute -left-7 top-1/2 transform -translate-y-1/2 z-1000 cursor-pointer`}
        onClick={onClick}
      >
        <button className="bg-gray-300 border shadow-lg text-white p-2 Z-1000 rounded-full"><IoIosArrowBack className="text-black"/> </button>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />, // Add next arrow
    prevArrow: <PrevArrow />, // Add prev arrow
  };

  return (
    <div className="trending-topics-container my-6 relative flex space-x-4 w-[820px]">
      <h2 className="font-bold text-lg mx-6 text-gray-700">Trending Topics</h2>
      <Slider {...settings} className="w-[720px]">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="p-2">
            <div className="border rounded-2xl px-3 py-2 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-200">
              <p className="text-md font-semibold text-gray-700">{topic.hashtag}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingTopics;
