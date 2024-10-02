import React from 'react';
import Link from 'next/link';

const healthData = [
  {
    id: 1,
    title: "Healthy Eating Habits",
    description: "Discover the best practices for a balanced diet that promotes a healthy lifestyle.",
    imageUrl: "../Assets/images/health1.avif",
    link: "/learn-more-healthy-eating"
  },
  {
    id: 2,
    title: "Exercise for Wellness",
    description: "Learn about effective workout routines to keep your body fit and active.",
    imageUrl: "../Assets/images/health2.avif",
    link: "/learn-more-exercise"
  }
];

const HealthPage = () => {
  return (
    <div className='w-[950px]'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-[950px]">
      {healthData.map((data) => (
        <div key={data.id} className="border rounded-lg overflow-hidden  w-[450px]">
          <img src={data.imageUrl} alt={data.title} className="w-[450px] h-72 object-cover" />
          <div className="p-4 border ">
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="text-gray-700 mb-4 w-full max-w-md  ">
          Trump warned <Link href="#" className='underline decoration-solid'>he will jail election officials </Link> he considers cheats; is complaining Pennsylvania’s voting is a fraud; vowed to pardon
           January 6 rioters; railed against women who accused him of sexual misconduct; and spent hours in recent days on sometimes 
          incoherent rants that raised questions about his state of mind.
           </p>
           {/* <span className='text-gray-700 mb-4 w-full max-w-md multi-line-ellipsis'>But new polling ahead of Tuesday’s showdown in Philadelphia 
            shows the race tied up nationally, suggesting Harris’ momentum after replacing President Joe Biden on the ticket hasn’t resulted
            in a commanding edge.</span> */}
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-end mb-4 mx-6">
  <Link href="#" className='text-xl font-medium text-blue-500'>Load More</Link>
</div>
<hr className='text-xl font-bold my-3 mx-3  border-gray-700 border-t-[1px]'></hr>
    </div>
  );
};

export default HealthPage;
