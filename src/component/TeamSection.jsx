
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Basant from '../assets/Images/Basant.png';
import a1 from '../assets/Images/Gallery/a1.jpeg';
import a2 from '../assets/Images/Gallery/a2.jpeg';
import a12 from '../assets/Images/Gallery/a12.jpg';

const teamMembers = [
  {
    name: 'ADV. Mahesh Pushpad',
    role: 'CRIMINAL LAWYER',
    description: `John Doe is a distinguished criminal lawyer with over 20 years of experience in the field. He has successfully defended clients in a wide range of cases and is known for his strategic thinking and dedication.`,
    image: a12
  },
  {
    name: 'ADV. Kamal Singh',
    role: 'FAMILY LAWYER',
    description: `Jane Smith specializes in family law, providing compassionate and effective representation in cases involving divorce, child custody, and other family matters. Her commitment to her clients is unparalleled.`,
    image: a1
  },
  {
    name: 'ADV. Lokendra Singh',
    role: 'CIVIL LAWYER',
    description: `Robert Brown has extensive experience in civil law, handling cases related to property disputes, contract issues, and more. His attention to detail and deep understanding of the law make him a valuable asset to any case.`,
    image: a2
  },
  // Add more team members here
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-300 py-12">
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center border-2 mx-auto bg-white w-[60%] border-gray-500 rounded-xl py-2 mb-8">OUR TEAM</h1>
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
           Expert Legal Minds Providing Strategic Guidance
          </motion.h2>
        </div>

        <div className="relative w-full h-96 overflow-hidden">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              style={{ display: currentIndex === index ? 'flex' : 'none' }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left p-4">
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <h1 className="text-2xl font-bold">{member.role}</h1>
                  <p className="mt-4">{member.description}</p>
                </div>
                <div className="md:w-1/2 p-4">
                  <img
                    decoding="async"
                    width="2000"
                    height="1335"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
