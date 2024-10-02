import Link from 'next/link';
import React from 'react';
import HealthPage from './HealthCard';

const Business = () => {
  return (
     <div>
    <div className="flex justify-start py-10 mx-4">
      {/* Card Container */}
      <div className="w-[920px] bg-white  rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-auto">
          <img
            className="w-full h-64 object-cover"
            src="../Assets/images/apple1.jfif"
            alt="company-img"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-2xl font-bold mb-3">Headline</h3>
          <p className="text-gray-700 mb-4">
          Trump warned <Link href="#" className='underline decoration-solid'>he will jail election officials </Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; vowed to pardon
           January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent days on sometimes 
          incoherent rants that raised questions about his state of mind. But new polling ahead of Tuesday’s showdown in Philadelphia 
            shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the ticket hasn’t resulted
            in a commanding edge.
              </p>
          
          {/* Link Button */}
          {/* <Link href="/more-details">
            <span  className="text-blue-500 hover:underline">Read More</span>
          </Link> */}
        </div>
        <hr className='text-xl font-bold my-3 mx-3  border-gray-700 border-t-[1px]'></hr>
      </div>
    
    </div>
    <HealthPage/>
    </div>
  );
};

export default Business;
