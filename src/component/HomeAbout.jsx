import React from 'react';
import photo from '../assets/Images/lawyer.jpg';

const AboutSection = () => {
  return (
    <div className="container mx-auto bg-gradient-to-r from-black via-gray-800 to-black p-10 rounded-2xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section with Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={photo}
            alt="Law books" 
            className="object-cover w-full h-80 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-xl"
          />
        </div>

        {/* Right Section with Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-6 text-center md:text-left">
            <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">10+ Years of Expertise in Law & Advocacy</h4>
            <p className="text-lg text-gray-700">Delivering trusted, tailored legal solutions with excellence and client satisfaction at the core.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-center hover:scale-105 transform transition-transform duration-300 shadow-md p-6 bg-gray-100 rounded-lg">
              <div className="text-5xl mb-4"><i className="fas fa-balance-scale"></i></div>
              <h3 className="text-xl font-semibold text-gray-800">Justice Advocacy</h3>
              <p className="mt-2 text-gray-600">Committed to upholding justice with integrity and passion.</p>
            </div>
            <div className="text-center hover:scale-105 transform transition-transform duration-300 shadow-md p-6 bg-gray-100 rounded-lg">
              <div className="text-5xl mb-4"><i className="fas fa-user-tie"></i></div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Lawyers</h3>
              <p className="mt-2 text-gray-600">Providing expert legal guidance and representation.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a href="/about" className="inline-block bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
