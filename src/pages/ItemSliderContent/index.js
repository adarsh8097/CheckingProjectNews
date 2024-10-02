import BreakingHeadLine from '@/components/BreakingHeadLine'
import TopNewCarousel from '@/components/TopNewCarousel'
import React from 'react'
import BreakingHeadLineNews from '../BreakingheadLine'
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

const ItemSliderContent = () => {
  return (
    <div>
        <p className='text-md mx-7 text-gray-700 font-extrabold text-2xl'>Breaking Head Line</p>
      
      &nbsp;
      <div className='flex'>
      <TopNewCarousel/>
      {/* <BreakingHeadLine/> */}
      <BreakingHeadLineNews/>
      </div>
      
     <div className=' bg-green-100 w-[980px] py-7 px-6 mx-5'>
        <div className='flex justify-between mb-4'>
        <p className='text-gray-800'>Related News</p>
        <p className='font-bold text-gray-800'>
          <Link href="#" className='flex space-x-4'>View All <IoIosArrowForward className='mt-1 font-bold'/> </Link></p>
        </div>
       <div className='flex'>
      <div className='flex w-96'>
            <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
      </div>
      <div className='flex w-96'>
          <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
     </div>
      <div className='flex w-96'>
      <img className='w-24 h-24 py-2 mx-2' src="../Assets/images/politics6.jpg" alt='news-img'/>
            <p className='w-auto py-1 w-24 h-12'>“Elections 2024: Live updates Trump set to face off in first debate tomorrow</p>
       </div>
       </div>
     </div>
    </div>
  )
}

export default ItemSliderContent
