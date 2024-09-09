import React from 'react';
import { FaBriefcase, FaUserTie, FaBalanceScale, FaGavel } from 'react-icons/fa';
import user from '../assets/Images/t1.jpg';
import user1 from '../assets/Images/t2.jpg';
import user2 from '../assets/Images/t3.jpg';
import user3 from '../assets/Images/t4.jpg';

// Sample data for team members
const teamMembers = [
  {
    name: 'Mahesh Pushpad',
    role: 'Senior Partner',
    image: user,
    icon: <FaBriefcase />,
  },
  {
    name: 'Kamal Singh',
    role: 'Associate Attorney',
    image: user1,
    icon: <FaUserTie />,
  },
  {
    name: 'Lokendra Singh',
    role: 'Legal Consultant',
    image: user2,
    icon: <FaBalanceScale />,
  },
  {
    name: 'Amisha Gupta',
    role: 'Paralegal',
    image: user3,
    icon: <FaGavel />,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12" data-aos="fade-in" data-aos-delay="100">
          <h2 className="text-5xl font-extrabold">
            Meet Our <span className="text-indigo-600">Team</span>
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-4 rounded"></div>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            Our team comprises dedicated professionals with extensive knowledge and experience. We are committed to delivering top-notch service to our clients. Meet some of the key members of our firm:
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl" data-aos="fade-up">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.image}
                    className="w-full h-[240px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    alt={member.name}
                  />
                  <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold py-1 px-3 rounded-full">
                    {member.role}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-black text-4xl mb-2">{member.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-800">{member.name}</h4>
                  <span className="text-lg text-gray-500">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
