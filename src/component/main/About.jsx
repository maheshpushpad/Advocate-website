import React from 'react';
import TeamSection from '../TeamSection';
import AboutSection from '../AboutSection';

const About = () => {
  return (
    <div className='bg-slate-300 pt-16'>
        {/* <h1 className="text-3xl font-bold text-center border-2 mx-auto bg-white w-[60%] border-gray-500 rounded-xl py-2 mt-8 ">ABOUT US</h1> */}
      <AboutSection />
      {/* <TeamSection /> */}
    </div>
  );
}

export default About;