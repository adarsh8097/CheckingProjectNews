import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Import Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore the majestic mountains and enjoy breathtaking views.",
    image: "../Assets/images/sport1.webp"
  },
  {
    id: 2,
    title: "Beach Getaway",
    description: "Relax by the sea and soak up the sun on a tropical beach.",
    image: "../Assets/images/sport8.webp"
  },
  {
    id: 3,
    title: "City Escape",
    description: "Discover the vibrant energy of a bustling cityscape.",
    image: "../Assets/images/sport10.webp"
  },
  {
    id: 4,
    title: "Desert Safari",
    description: "Experience the thrill of a desert adventure and dunes.",
    image: "../Assets/images/sport6.jpg"
  },
  {
    id: 5,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/sport7.jpg"
  }
];

const HeightLights = () => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='mt-3'>
      <span className='text-xl font-bold mx-6 py-2'>Highlights</span>
      <Slider {...settings} className='mx-5 w-[300px]  rounded mb-2 my-3'>
        {cardData.map((card) => (
          <div key={card.id} className="card w-[300px] h-48">
            {/* Use Next.js Image component for optimized images */}
            <img
              src={card.image} 
              alt={card.title} 
              width={300} 
              height={200} 
              layout="responsive"
              className="rounded"
            />
            {/* <h3>{card.title}</h3> */}
            {/* <p>{card.description}Read More </p> */}
          </div>
        ))}
      
      </Slider>
      <div className='mx-5'>
      <h2 className='text-lg font-bold'>Headline1</h2>
      <p>
      Trump warned he will jail election 
        officials he considers cheats; is 
        complaining Pennsylvania’s voting is 
        a fraud; vowed to pardon
        January 6 rioters; railed against 
        women who accused him of sexual

      </p>
      <p className='font-black flex'>Read More <IoIosArrowForward className='mt-1'/> </p>
        </div>
    </div>
  );
};

export default HeightLights;
