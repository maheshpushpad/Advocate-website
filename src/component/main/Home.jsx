import React from 'react';
import CaraSoul from '../CaraSoul';
import Welcome from '../Welcome';
import OurServices from '../OurServices';
// import Work from '../Work';
import Team from '../Team';
import ContactSection from '../ContectSection';
import GetInTouch from '../GetInTouch';
import HomeAbout from '../HomeAbout';

const Home = () => {
  return (
    <div className='bg-slate-300'>
      <CaraSoul />
      <Welcome />
      <HomeAbout />
      <OurServices />
      {/* <Work /> */}
      <Team />
      <GetInTouch />
      <ContactSection />
    </div>
    
  );
}

export default Home;