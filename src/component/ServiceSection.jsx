import React from 'react';
import { FaGavel, FaBriefcase, FaHome, FaBalanceScale, FaMedkit, FaUniversity, FaHandshake, FaUserShield, FaLandmark, FaTree, FaDollarSign, FaFileContract, FaShieldAlt, FaSyringe } from 'react-icons/fa';

const services = [
  { id: 1, name: "Corporate Law", description: "Expert legal guidance for businesses, including advice on mergers, acquisitions, corporate governance, and compliance with regulations.", icon: <FaBriefcase /> },
  { id: 2, name: "Criminal Law", description: "Representation and defense against criminal charges, including legal counsel during criminal investigations and court proceedings.", icon: <FaUserShield /> },
  { id: 3, name: "Family Law", description: "Legal support for family-related matters such as divorce, child custody, alimony, and adoption proceedings.", icon: <FaHome /> },
  { id: 4, name: "Employment Law", description: "Legal services addressing workplace issues, including employee rights, discrimination claims, and wrongful termination disputes.", icon: <FaHandshake /> },
  { id: 5, name: "Real Estate Law", description: "Legal assistance with property transactions, disputes, and land use issues, including buying, selling, and leasing property.", icon: <FaBalanceScale /> },
  { id: 6, name: "Intellectual Property Law", description: "Protection and enforcement of intellectual property rights, including patents, trademarks, copyrights, and trade secrets.", icon: <FaUniversity /> },
  { id: 7, name: "Personal Injury Law", description: "Legal representation for individuals who have sustained injuries due to the negligence or wrongdoing of others, including accidents and malpractice.", icon: <FaMedkit /> },
  { id: 8, name: "Immigration Law", description: "Assistance with immigration matters such as visa applications, green cards, asylum claims, and citizenship processes.", icon: <FaGavel /> },
  { id: 9, name: "Bankruptcy Law", description: "Guidance and representation for individuals or businesses undergoing financial insolvency, including debt restructuring and bankruptcy filings.", icon: <FaLandmark /> },
  { id: 10, name: "Environmental Law", description: "Legal services related to environmental protection, regulatory compliance, and disputes involving environmental impact and conservation.", icon: <FaTree /> },
  { id: 11, name: "Tax Law", description: "Legal advice on tax planning, compliance with tax regulations, and resolution of disputes with tax authorities.", icon: <FaDollarSign /> },
  { id: 12, name: "Estate Planning and Probate Law", description: "Services for managing wills, trusts, and estate planning, as well as handling probate proceedings and estate administration.", icon: <FaFileContract /> },
  { id: 13, name: "Consumer Protection Law", description: "Legal support for consumer rights, addressing issues such as product liability, false advertising, and unfair business practices.", icon: <FaShieldAlt /> },
  { id: 14, name: "Medical Malpractice Law", description: "Representation for individuals who have experienced harm due to medical negligence or errors in healthcare services.", icon: <FaSyringe /> },
  { id: 15, name: "Contract Law", description: "Legal services focused on drafting, reviewing, and enforcing contracts to ensure clear terms and protection of interests.", icon: <FaFileContract /> },
  { id: 16, name: "Civil Rights Law", description: "Advocacy for the protection and enforcement of individual rights and freedoms, including challenges to government or private infringements.", icon: <FaGavel /> },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto bg-gray-100 px-6 py-16">
      <h1 className="text-4xl font-bold text-center border-2 mx-auto bg-white w-[60%] border-black rounded-xl p-2 text-gray-900 mb-12">
        Our Legal Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map(service => (
          <div
            key={service.id}
            className="group relative border rounded-xl shadow-lg bg-white overflow-hidden hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="bg-gray-800 text-white p-6 flex items-center justify-center">
              <div className="text-4xl">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold group-hover:text-indigo-600 transition-colors duration-300">
                {service.name}
              </h2>
              <p className="text-gray-700 italic mt-2">{service.description}</p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
