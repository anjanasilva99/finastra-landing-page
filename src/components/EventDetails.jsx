import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const EventDetails = () => {
  const details = [
    {
      icon: <FaCalendarAlt className="text-4xl text-secondary mx-auto" />,
      title: 'Date & Time',
      details: ['May 15, 2025', '9:00 AM - 4:00 PM']
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-secondary mx-auto" />,
      title: 'Location',
      details: ['Jumeirah Emirates Towers', 'Dubai, UAE']
    },
    {
      icon: <FaUsers className="text-4xl text-secondary mx-auto" />,
      title: 'Participants',
      details: ['Banking Executives', 'Financial Technology Leaders']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Event Details
        </h2>

        <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 text-center max-w-xs w-full"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-700">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;