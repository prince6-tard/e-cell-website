import React from 'react'
import  ITSengg from '../assets/ITSengg.svg'
import eCellLogo from '../assets/e-cell-logo.png'

const Navbar = () => {
 
  return (
    
    <div className="fixed top-0 left-0 w-screen flex items-center justify-between px-10 py-4 h-20 z-50 ">
      
      <a href="/" className="flex items-center">
        <img src={eCellLogo} alt="E-CELL Logo" className="h-32 w-auto max-h-full" />
      </a>
         


      {/* Middle links */}
      <div className="flex-grow flex justify-center space-x-8 p-5">
        <a href="/" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl">Contact Us</a>
        <a href="/" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl" >About Us</a>
        <a href="#" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl" >Core Members</a>
        <a href="#" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl" >Projects</a>
      </div>

      {/* Right side - Auth buttons */}
      
    </div>
  )
}

export default Navbar