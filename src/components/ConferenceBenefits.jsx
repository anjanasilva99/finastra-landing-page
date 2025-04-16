import React from 'react';
import { FaLightbulb, FaChartLine, FaUsers, FaGraduationCap, FaComments } from 'react-icons/fa';

const ConferenceBenefits = () => {
  const benefits = [
    {
      icon: <FaLightbulb className="text-2xl text-secondary" />,
      title: 'Learn',
      description: 'Learn from industry experts'
    },
    {
      icon: <FaChartLine className="text-2xl text-secondary" />,
      title: 'Trends',
      description: 'Stay ahead of emerging trends'
    },
    {
      icon: <FaUsers className="text-2xl text-secondary" />,
      title: 'Connect',
      description: 'Connect with fellow banking professionals'
    },
    {
      icon: <FaGraduationCap className="text-2xl text-secondary" />,
      title: 'Enhance',
      description: 'Enhance your knowledge, skills, and network'
    },
    {
      icon: <FaComments className="text-2xl text-secondary" />,
      title: 'Share',
      description: 'Share your expertise and experience with peers'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
        </h2>
        
        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Left side - Conference Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/conference.png" 
                alt="Finastra Conference" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side - Benefits List */}
          <div className="md:w-1/2 md:pl-12">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 p-3 bg-primary bg-opacity-10 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBenefits;