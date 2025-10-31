import React from 'react'
import  ITSengg from '../assets/ITSengg.svg'
import eCellLogo from '../assets/e-cell-logo.png'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
     
    }
  };
 
  return (
    
    <div className="fixed top-0 left-0 w-screen flex items-center justify-between px-10 py-4 h-20 z-50 ">
      
      <a href="/" className="flex items-center">
        <img src={eCellLogo} alt="E-CELL Logo" className="h-32 w-auto max-h-full" />
      </a>
         


      {/* Middle links */}
      <div className="flex-grow flex justify-center space-x-8 p-5">
        <a href="/" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl">Contact Us</a>
        <button onClick={() => scrollToSection('about-us')} className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl bg-transparent border-none cursor-pointer">About Us</button>
        <button onClick={() => scrollToSection('core-members')} className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl bg-transparent border-none cursor-pointer">Core Members</button>
        <a href="#" className="text-[#ffffff] hover:text-[#2596BE] font-bold px-10 text-xl" >Projects</a>
      </div>

      {/* Right side - Auth buttons */}
      
    </div>
  )
}

export default Navbar