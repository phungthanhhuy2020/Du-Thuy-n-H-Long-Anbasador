
import React from 'react';
import { CRUISE_NAME } from '../constants';

const Header: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-navy/80 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold tracking-wider text-gold">
          {CRUISE_NAME}
        </h1>
        <button 
          onClick={scrollToForm}
          className="bg-gold text-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 hidden md:block"
        >
          Nhận Tư Vấn
        </button>
      </div>
    </header>
  );
};

export default Header;
