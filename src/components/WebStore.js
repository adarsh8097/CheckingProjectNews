import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Import Next.js Image component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  },
  {
    id: 6,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/politics6.jpg"
  },
  {
    id: 7,
    title: "Desert Safari",
    description: "Experience the thrill of a desert adventure and dunes.",
    image: "../Assets/images/sport3.webp"
  },
  {
    id: 8,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/sport10.webp"
  },
  {
    id: 9,
    title: "Forest Retreat",
    description: "Reconnect with nature in a peaceful forest environment.",
    image: "../Assets/images/politics4.jpg"
  }
];

const HeightLights = () => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 1800,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='mt-3 overflow-hidden'>
      <span className='text-xl font-bold mx-6 py-2'>Webstories</span>
      <Slider {...settings} className='mx-5 '>
        {cardData.map((card) => (
          <div key={card.id} className="card p-2 ">
            {/* Use Next.js Image component for optimized images */}
            {/* <Image 
              src={card.image} 
              alt={card.title} 
              width={350} 
              height={300} 
              layout="responsive"
              className="rounded"
            /> */}
             <img className='h-[400px]' src={card.image} alt='img-product'/>
            {/* <h3 className="mt-2 font-semibold">{card.title}</h3>
            <p>{card.description} <a href="#" className="text-blue-600">Read More</a></p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeightLights;
