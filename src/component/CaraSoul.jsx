import React, { useState, useEffect } from 'react';

import A1 from '../assets/Images/carasoul/A1.jpg';
import A2 from '../assets/Images/carasoul/A2.jpg';

import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const CaraSoul = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 0, srcimg: A1, alt: 'Slide 1', title: 'Expert Legal Consultation', subtitle: 'Get Professional Legal Advice' },
    { id: 1, srcimg: A2, alt: 'Slide 2', title: 'Comprehensive Case Management', subtitle: 'Handling Your Legal Matters Efficiently' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <ul className="relative w-full h-full">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.srcimg} alt={slide.alt} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-4 md:p-8">
              <div className="slide-text space-y-4">
                <h1 className="text-2xl md:text-4xl pt-36 font-bold">{slide.title}</h1>
                <h3 className="text-lg md:text-2xl">{slide.subtitle}</h3>
                {/* <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <button 
                    onClick={() => window.location.href = 'tel:+916268738997'  }  
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transform hover:scale-110 transition-transform duration-200"
                  >
                    Contact on Call
                  </button>
                  <button 
                    onClick={() => window.location.href = 'https://wa.me/6268738997' } 
                    className="bg-green-500 hover:bg-green-700 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg transform transition-transform duration-200"
                  >
                    Contact on Whatsapp
                  </button>
                </div> */}
              </div>
            </div>
          </li>
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-black opacity-50 text-white px-2 py-2 rounded-full focus:outline-none hover:bg-gray-700 transition-colors duration-200"
        >
          <MdKeyboardDoubleArrowLeft className='h-8 w-8 rounded-full text-white' />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-black opacity-50 text-white px-2 py-2 rounded-full focus:outline-none hover:bg-gray-700 transition-colors duration-200"
        >
          <MdKeyboardDoubleArrowRight className='h-8 w-8 rounded-full text-white' />
        </button>
      </ul>
    </div>
  );
};

export default CaraSoul;
