import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        
        {/* About Section */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-2xl font-bold text-white border-b-4 #4F46E5 inline-block pb-2">About Us</h2>
          <p className="text-gray-300 leading-relaxed flex-grow">
            Binary Associates is a premier law firm specializing in Corporate, Criminal, Family, and Employment Law. We handle mergers, disputes, and more, offering expert legal support with a focus on client satisfaction.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-blue-400 hover:text-blue-500 transform transition-transform hover:scale-110"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-600 transform transition-transform hover:scale-110"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-500 transform transition-transform hover:scale-110"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube" className="text-red-500 hover:text-red-600 transform transition-transform hover:scale-110"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-2xl font-bold text-white border-b-4 #4F46E5 inline-block pb-2">Quick Links</h2>
          <div className="flex flex-col space-y-2 flex-grow">
            <Link to="/" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Services</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Gallery</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">Contact</Link>
          </div>
        </div>

        {/* Timing Section */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-2xl font-bold text-white border-b-4 #4F46E5 inline-block pb-2">Office Hours</h2>
          <p className="text-gray-300 leading-relaxed flex-grow">
            Monday to Friday: 9:00 AM - 5:00 PM<br />
            Closed on Weekends
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300">
            <li>Expertise You Can Trust</li>
            <li>Client-Focused Representation</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4 flex flex-col">
          <h2 className="text-2xl font-bold text-white border-b-4 #4F46E5 inline-block pb-2">Contact Info</h2>
          <div className="space-y-2 flex-grow">
            <a href="https://goo.gl/maps/xxx" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-transform transform hover:scale-105">
              <i className="fas fa-map-marker-alt text-white"></i>
              <span>105 Ayodhya Nagar, Bhopal</span>
            </a>
            <a href="tel:+918982324143" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-transform transform hover:scale-105">
              <i className="fas fa-phone-alt text-white"></i>
              <span>+91 8982324143</span>
            </a>
            <a href="mailto:Binaryassociates@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-transform transform hover:scale-105">
              <i className="fas fa-envelope text-white"></i>
              <span>Binaryassociates@gmail.com</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
  <p>&copy; {new Date().getFullYear()} Binary Associates. All rights reserved.</p>
  <p>Developed with ❤️ by <a href="https://binarylogix.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">Binarylogix Technologies</a></p>
</div>

    </footer>
  );
};

export default Footer;
