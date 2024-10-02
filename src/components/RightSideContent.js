import React from 'react'
import Layout from './Layout'

const RightSideContent = () => {
  const electionData = [
    "Elections 2024: Live updates",
    "Trump set to face off in first debate",
    "Biden campaigns across the Midwest",
    "Key battleground states in focus",
    "Polls show tight race ahead"
  ];

  return (
    <div className='mt-45'>
      <h1 className='text-xl mx-4'>Advertisement</h1>
      <div className='w-72 mx-4 rounded rounded-md mb-6'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQ2tA5Y-gO0ijlluu-Tf7hNTh3y9s31kl-g&s' alt="advertisement-content" />
      </div>
      
    
      
      <div className='mt-4 mx-6'>
        <h2 className='text-xl -mx-2 py-4'>Take a Quiz!</h2>
        <p className='bg-[#21c90e] text-center py-5 text-yellow-400 rounded -mx-2 cursor-pointer shadow-md'>START NOW !!</p>
      </div>
       {/* Displaying Election Data as Cards */}
       <h2 className='text-xl mx-4 mb-4 mt-4'>Elections 2024: Live updates</h2>
       {electionData.map((item, index) => (
        <div key={index} className='bg-white shadow-md rounded p-4 mb-4 mx-4 mt-4'>
           <p className='text-gray-400 '>10 min ago</p>
          <h3 className='text-lg font-bold'>{item}</h3>
        </div>
      ))}

      <div className='w-72 mx-4 rounded rounded-md mb-6 shadow-md'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQ2tA5Y-gO0ijlluu-Tf7hNTh3y9s31kl-g&s' alt="advertisement-content" />
      </div>
    </div>
  );
}

export default RightSideContent;
