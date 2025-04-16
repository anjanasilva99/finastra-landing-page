import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo-container">
            <img 
              src="https://cogentsolutions.ae/views/img/logos/cogent-logo-01.png" 
              alt="Cogent Solutions Logo" 
              className="h-12"
            />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-primary">
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#overview" className="text-primary font-semibold hover:text-secondary">Event Overview</a></li>
            <li><a href="#agenda" className="text-primary font-semibold hover:text-secondary">Agenda</a></li>
          </ul>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 pb-3">
            <li><a href="#overview" className="block text-primary font-semibold hover:text-secondary">Event Overview</a></li>
            <li><a href="#agenda" className="block text-primary font-semibold hover:text-secondary">Agenda</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;