import React from 'react';
import ContactSection from '../ContectSection';
import GetInTouch from '../GetInTouch';

const Contact = () => {
  return (
    <div className='bg-slate-50 pt-16'>
      {/* <h1 className="text-3xl pt-2 font-bold text-center">Contact Us</h1>
      <p className="mt-4 text-center">Get in touch with us for any inquiries or to schedule a consultation.</p> */}
      <GetInTouch />
      <ContactSection />
    </div>
  );
}

export default Contact;
