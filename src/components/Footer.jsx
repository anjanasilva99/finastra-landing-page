import React from 'react';
import { FaFacebookF, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-12">
          {/* About Column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-4">
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-secondary">
              About Cogent Solutions
            </h3>
            <p className="mb-4">
              Cogent Solutions is a leading provider of digital transformation solutions 
              for the banking and financial services industry in the UAE and beyond.
            </p>
          </div>
          
          {/* Contact Column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-4">
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-secondary">
              Contact Us
            </h3>
            <p className="mb-2">Email: events@cogentsolutions.ae</p>
            <p className="mb-2">Phone: +971 4 123 4567</p>
            <p className="mb-2">Address: Dubai Internet City, Dubai, UAE</p>
          </div>
          
          {/* Connect Column */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-secondary">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/finastra" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-secondary">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/finastra" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-secondary">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white border-opacity-10">
          <p>&copy; 2025 Cogent Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;