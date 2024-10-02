import React from 'react';

const Advertisement = () => {
  return (
    <div className='overflow-hidden '>
   <div className="bg-blue-500 border-4 border-blue-500  mt-[68px] overflow-hidden"></div>
   <div className='flex space-x-6 py-4 mt-[10px] -mx-4 '>
    <div className='mx-12 w-[240px]'>
        <img className='w-full' src ='../Assets/images/Logo.png' alt='product-log'/>
        </div>
        
         <div className='w-[720px] object-contain'>
        <img 
          className='w-full h-[120px] rounded-lg shadow-md' 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/PradhanMantriKisanSammanNidhi.jpg" 
          alt="advertisement-poster" 
        />
        {/* <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg'>
          <h2 className='text-white text-lg font-bold text-center p-4'>
            Your Catchy Tagline Here!
          </h2>
        </div> */}
      </div>
      <div className="content-container">
  {/* Main content here */}
  <div className="mx-6 flex mt-[72px] justify-center">
    <p className="text-blue-600 font-bold text-lg">English</p>&nbsp; | &nbsp;
    <p className="font-bold">Telugu</p>
  </div>
</div>

      
    </div>
    </div>
  );
};

export default Advertisement;
