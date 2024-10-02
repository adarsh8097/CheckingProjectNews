import React from 'react'
import Header from '@/pages/Navbar';
import Footer from './Footer';

const Layout = ({  children,rightContent }) => {
  return (
    <div>
       <Header/>
     
       <main>{ children }</main>
       {/* <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="font-bold text-lg mb-4">Right Sidebar</h2>
          {rightContent}
        </aside> */}
       
       <Footer/>
       </div>
  )
}

export default Layout ;
