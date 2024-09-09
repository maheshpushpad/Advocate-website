import React from 'react';

const OurServices = () => {
  return (
    <div id="services" className="services py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-wide">
            Our <span className="text-indigo-600">Services</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card transform hover:scale-105 transition duration-500 ease-in-out border-t-4 border-black rounded-lg p-8 text-center bg-white shadow-lg">
            <div className="icon mb-6 text-black">
              <i className="fa fa-gavel fa-4x"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Corporate Law</h4>
            <p className="text-gray-600">
              Expert legal services in corporate governance, compliance, mergers, and corporate restructuring.
            </p>
          </div>
          <div className="service-card transform hover:scale-105 transition duration-500 ease-in-out border-t-4 border-black rounded-lg p-8 text-center bg-white shadow-lg">
            <div className="icon mb-6 text-black">
              <i className="fa fa-balance-scale fa-4x"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Litigation</h4>
            <p className="text-gray-600">
              Representation in civil and criminal cases with strategic legal defense.
            </p>
          </div>
          <div className="service-card transform hover:scale-105 transition duration-500 ease-in-out border-t-4 border-black rounded-lg p-8 text-center bg-white shadow-lg">
            <div className="icon mb-6 text-black">
              <i className="fa fa-handshake fa-4x"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Arbitration</h4>
            <p className="text-gray-600">
              Efficient dispute resolution outside of court through expert arbitration services.
            </p>
          </div>
          <div className="service-card transform hover:scale-105 transition duration-500 ease-in-out border-t-4 border-black rounded-lg p-8 text-center bg-white shadow-lg">
            <div className="icon mb-6 text-black">
              <i className="fa fa-lightbulb fa-4x"></i>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Intellectual Property</h4>
            <p className="text-gray-600">
              Protecting trademarks, patents, and copyrights with professional legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
