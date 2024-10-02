import LatestNews from '@/components/LatestNews';
import NewCards from '@/components/NewCards';
import Popular from '@/components/Popular';
import React from 'react'

const NewsCardContent = () => {
  return (
     <div className='w-[950px] gap-10'>
    <div className='grid grid-cols-3'>
       <NewCards/>
       {/* <NewCards/> */}
        <LatestNews/>
       <Popular/>

    </div>
    <hr className='text-xl font-bold my-3 mx-3 text-black border-gray-900 border-t-[1px]'></hr>
    </div>
  )
}

export default NewsCardContent;
