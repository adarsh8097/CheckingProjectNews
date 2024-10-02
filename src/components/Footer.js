import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
     let  content = ['sports','health','Culture and trends','Business','travel'];
     let  enjoy = ['Enteratinment', 'Expression', 'Economy','Innerview', 'Main'];
    let  Enteratinment = ['E-Paper Links','Watch Live', 'Social Media', 'Webstories', 'Videos','Photos'];

   return (
    <div className='bg-gradient-to-b from-blue-900 to-blue-600 text-white w-full h-auto  bottom-0 py-4 overflow-hidden'>
       <div className='mx-3 grid grid-cols-3 gap-10'>
       <div className='mx-12 my-3'>
        <p className='mb-2 text-xl font-bold'>Subscribe with us!</p>
        <input type='text' placeholder='Enter your email ID'  className='px-2 py-2 rounded w-80 text-black outline-none'/>
       </div>
       <div className='overflow-hidden my-3 mx-12 flex justify-center items-center'>
            <img className='rounded w-52 ' src ="../Assets/images/Logo.png" alt="company-log" />
        </div>
        <div className='my-4 mx-12 container'>
           <h3 className='font-bold'>Social Media:</h3>
           <div className='flex space-x-3 mt-2 text-xl'>
            <p className='cursor-pointer'><FaFacebookF/></p>
            <p className='cursor-pointer'><FaLinkedinIn/></p>
            <p className='cursor-pointer'><FaTwitter/></p>
            </div>
        </div>
        </div>
         
        <div className='grid grid-cols-6 my-12'>
        <div className='text-lg mx-10 font-bold'>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>About Us</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Contect Us</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Our Vision</p>
            <p className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Careera</p>

        </div>
         <div className=''>
           <ul>
           {content.map((d,index)=>(
                <li className='capitalize py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
            ))}
           </ul>
          </div>
          <div className=''>
          <ul>
           {enjoy.map((d,index)=>(
                <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
            ))}
           </ul>
          </div>
           <div className=''>
               <ul>
               {Enteratinment.map((d,index)=>(
                    <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit' key={index} value={d}>{d}</li>
                ))}
               </ul>
           </div>
           <div className=''>
               <p className='text-2xl font-bold'>Policies</p>
                <ul className='py-1'>
                    <li className='py-0.5 cursor-pointer border-b-2 border-transparent hover:border-yellow-400 w-fit text-md'>Fact Check Policy</li>
                     <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Ethics Policy</li>
                     <li className='py-0.5 border-b-2 border-transparent cursor-pointer hover:border-yellow-400 w-fit'>Corrections Policy</li>
                </ul>
           </div>
           <div className='text-xl mx-2'>
            <p className='font-bold '>Advertise On our Site</p>
            <p className='py-0.5 cursor-pointer text-sm'>Terms and conditions</p>
           </div>
        </div>
        
       {/* <p className='mt-2 text-center'> &copy; all copy wright to point application !.</p> */}
    </div>
  )
}

export default Footer;
