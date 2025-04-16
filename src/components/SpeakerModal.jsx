import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-2xl font-bold text-primary">Speaker Profile</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-secondary p-2 rounded-full"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:flex gap-6">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-primary mb-2">{speaker.name}</h3>
            <p className="text-lg text-secondary italic mb-4">{speaker.title}</p>
            <div className="text-gray-700 leading-relaxed">
              {speaker.bio}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t text-right">
          <button 
            onClick={onClose}
            className="bg-secondary hover:bg-opacity-90 text-white px-5 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;