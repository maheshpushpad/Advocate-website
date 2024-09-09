import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-black to-gray-800 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-3/5">
            <h3 className="text-3xl text-center font-extrabold text-white mb-6 lg:text-left">
              Get Directions
            </h3>
            <p className="text-white font-medium mb-6 text-center lg:text-left">
              If you have any questions or need assistance, please don't hesitate to reach out to us. We're here to help and answer any questions you may have.
            </p>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.167663076774!2d77.46313957509975!3d23.27335677899882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c695b45410981%3A0xa39a1823d9efc65!2sBinarylogix%20Technologies!5e0!3m2!1sen!2sin!4v1725303409735!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg transition-transform transform hover:scale-105 duration-300"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-2/5 flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
            <p className="text-gray-600 font-medium text-center">
              Fill in the form to get in touch with us. We will get back to you as soon as possible.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                type="text"
                placeholder="Your Name"
              />
              <input
                minLength="10"
                maxLength="10"
                className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                type="text"
                placeholder="Your Number"
              />
              <input
                className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                type="email"
                placeholder="Your Email ID"
              />
              <input
                maxLength="250"
                className="form-input px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                type="text"
                placeholder="City"
              />
              <textarea
                rows="3"
                className="form-textarea px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Type Your Message.."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
