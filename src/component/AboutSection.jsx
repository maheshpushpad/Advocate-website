import React from 'react';
import image1 from '../assets/Images/IAbout.jpg';

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gradient-to-r from-gray-100 to-gray-100">
      <div className="md:w-1/2 flex justify-center md:justify-end items-center p-20 mb-8 md:mb-0">
        <div className="relative w-full h-[60vh] max-w-lg">
          <img src={image1} alt="Founder" className="rounded-lg shadow-2xl object-cover h-full w-full overflow-hidden border-4 border-white" />
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        </div>
      </div>
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-widest">ABOUT BINARY ASSOCIATES</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-justify">
  Binary Associates is a top law firm offering expert services in Corporate, Criminal, and Family Law. We handle mergers, criminal defense, and family disputes, as well as Employment, Real Estate, and Intellectual Property Law, focusing on workplace issues, property transactions, and IP protection.
</p>
<p className="text-gray-800  leading-relaxed mb-6 text-justify">
  Our firm also specializes in Personal Injury, Immigration, Bankruptcy, Environmental, and Tax Law. We assist with injury claims, visa processes, financial insolvency, regulatory compliance, and tax planning.
</p>
<p className="text-gray-800 text- leading-relaxed mb-6 text-justify">
  We provide services in Estate Planning, Probate, Consumer Protection, Medical Malpractice, Contract Law, and Civil Rights Law, ensuring comprehensive support and advocacy.
</p>
<p className="text-gray-800 text- leading-relaxed mb-6 text-justify">
  Binary Associates is dedicated to delivering tailored legal solutions with professionalism and integrity, focusing on client satisfaction and excellence.
</p>

      </div>
    </section>
  );
};

export default AboutSection;
