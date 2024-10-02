import React from 'react';
import { MdMenu, MdOutlineLiveTv } from "react-icons/md";
import { IoLogoYoutube, IoMdCamera, IoIosNotifications } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { TbBrandYoutube } from "react-icons/tb";

const Header = () => {
  const contentTopics = [
    "Topics",
    "Sustainable Living:",
    "Top Remote Work",
    "Mental Health in the Digital Age",
    "Blockchain Beyond Cryptocurrency",
    "How to Stay Fit in a Busy Lifestyle",
    "The Role of Social Media in Shaping Political Opinions",
    "The Rise of Electric Vehicles and Their Environmental Impact",
    "Navigating Career Changes in a Rapidly Evolving Job Market",
    "The Importance of Cybersecurity in the Digital World"
  ];

  const defaultOption = contentTopics[0];

  return (
    <div >
     
      <div className='grid grid-cols-3 bg-black text-[#ccc] py-4 fixed w-full z-[9999] top-0 '>
        {/* Dropdown and Menu Icon */}
        <div className='flex items-center space-x-6'>
          <MdMenu  className='mx-5 text-4xl cursor-pointer' />
          {/* <Dropdown className='w-48  h-9 text-[#ccc] ' options={contentTopics} value={defaultOption} placeholder="Select an option" /> */}
          <select className='bg-black  px-5 border py-2 rounded cursor-pointer'>
            <option value="topic">Topics</option>
          </select>
        </div>

        {/* Navigation Links */}
        <div className='flex space-x-4 -mx-24'>
        <div className='mx-2 flex flex-row  items-center  space-x-4 text-md'>
          <p className='border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit text-md -mx-2'>National </p> &nbsp; &nbsp;&nbsp;|
          <p className='border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>Andhra </p> &nbsp;  |
          <p className='border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>Telangana</p>
        </div>

        {/* Media Links */}
        <div className='mx-2 flex flex-row space-x-4 items-center text-md'>
          <div  className='flex space-x-2 border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>
          <TbBrandYoutube className='mt-0.5 text-xl'/>
          <p>Videos</p>
          </div>
           <div  className='flex space-x-2 border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>
           <IoMdCamera  className='mt-0.5 text-xl'/>
           <p>Photos</p>
           </div>
          <div className='flex space-x-2 border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>
           <MdOutlineLiveTv  className='mt-0.5 text-xl'/>
          <p> Watch Live</p>
          </div>
        
        </div>
        </div>

        {/* Other Links */}
        <div className='flex space-x-6 items-center justify-around space-x-6'>
        <div className='mx-2 flex flex-row space-x-6 items-center'>
          <p className='border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>About Us</p>
          <p className='border-b-2 border-transparent cursor-pointer hover:border-green-100 w-fit'>Contact Us</p>
          </div>
        

        {/* Icons */}
        <div className='flex items-center space-x-8 -mx-10 '>
          <FaMagnifyingGlass  className='text-xl border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'/>
          <IoIosNotifications  className='text-2xl border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'/>
        </div>
        </div>
        </div>
        
      {/* </div> */}
    </div>
  );
}

export default Header;
