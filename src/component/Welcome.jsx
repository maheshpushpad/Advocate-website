import React from 'react';
import A3  from '../assets/Images/carasoul/A3.jpg';

const Welcome = () => {
  return (
    <section id="about" className="about bg-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">

        <div className="w-full md:w-1/2 flex items-stretch" data-aos="fade-up">
  <div className="content p-6">
    <h3 className="text-4xl text-black font-bold">
      Welcome To
      <br />
      <span className="text-black">Binary Associates</span>
    </h3>
    <p className="mt-4 text-lg leading-relaxed">
      <strong>Binary Associates</strong> offers top-notch legal services in Corporate Law, Litigation, Arbitration, Intellectual Property, and Legal Consultancy.
    </p>
    <p className="mt-4 text-lg leading-relaxed">
      Our team of skilled lawyers and consultants is dedicated to providing efficient and effective legal solutions.
    </p>
    <div className="mt-6">
      <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition duration-300">
        Contact Us
      </a>
    </div>
  </div>
</div>

          <div className="w-full md:w-1/2 flex items-stretch">
            {/* Start .content */}
            <div className="content p-6">
              <img src={A3} alt="image" className="w-full object-cover rounded-md " />
            </div>
            {/* End .content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
