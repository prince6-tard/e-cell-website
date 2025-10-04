import React from 'react'
import inno from '../assets/inno.png'
import SplitText from "./SplitText";
import RotatingText from './RotatingText'
import { useRef } from 'react';

import TextType from './TextType';


const About = () => {
  
const containerRef = useRef(null);
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16  ">
        <div className="max-w-2xl">
          <SplitText
            text="What is E-CELL?"
            className="text-5xl md:text-6xl font-bold text-[#4FB7B3] mb-10"
            tag="h1"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        
          <p className="text-xl text-white leading-relaxed mb-10" ref={containerRef} style={{position: 'relative'}}>
          <TextType 
  text={["E-CELL is a student-run organization at I.T.S Engineering College that incubates startups by guiding them through PoC development, prototyping, MVP creation, pilot testing, and commercialization. It also provides students opportunities to work on live projects in hardware (drones, robotics, IoT) and software (app/web development, cybersecurity, AI/ML), fostering innovation and practical skills."]}
  typingSpeed={20}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

          </p>
          


  
  <div className="flex flex-wrap gap-4 ml-10">
            <button className='bg-gradient-to-r from-[#4FB7B3] to-[#A8FBD3] px-8 py-3 rounded-full text-black font-semibold ml-40'>
              <p>Get in touch</p>
            </button>
              <button>
<RotatingText
  texts={['inspiration', 'Innovation', 'Incubation', 'Intregation!']}
  mainClassName=" sm:px-5 md:px-5 bg-gradient-to-r from-[#A8FBD3] to-[#4FB7B3] text-black overflow-hidden py-3 px-8  justify-center rounded-full font-semibold"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/></button>
          </div>
          
        
        </div>
        <div className="mt-10 md:mt-0">
          <img src={inno} alt="Innovation" className="w-96 md:w-[400px]" />
        </div>
      </section>
         

      <section id="services" className="py-0 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4FB7B3] mb-4 relative inline-block">
            What We Do
            
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Discover how E-CELL supports student entrepreneurs through every stage of their journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Idea Incubation Card */}
          <div className="bg-[#0E1628] p-8 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl text-teal-500 mb-6">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Idea Incubation</h3>
            <p className="text-white">
              We help students transform their innovative ideas into viable business concepts through guided brainstorming and validation processes.
            </p>
          </div>
          
          {/* Proof of Concept Card */}
          <div className="bg-[#0E1628] p-8 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl text-teal-500 mb-6">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Proof of Concept</h3>
            <p className="text-white">
              Our technical mentors assist in building proof of concepts to demonstrate the feasibility of your innovative ideas.
            </p>
          </div>
          
          {/* Prototype Development Card */}
          <div className="bg-[#0E1628] p-8 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl text-teal-500 mb-6">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Prototype Development</h3>
            <p className="text-white">
              We provide resources and guidance to create functional prototypes that bring your ideas to life.
            </p>
          </div>
          
          {/* MVP & Pilot Programs Card */}
          <div className="bg-[#0E1628] p-8 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl text-teal-500 mb-6">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">MVP & Pilot Programs</h3>
            <p className="text-white">
              We support the development of Minimum Viable Products and coordinate pilot programs to test your solutions in real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>

  
  
 

    </>

  )
}

export default About