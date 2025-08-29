import React from 'react';
import { CRUISE_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-navy/80 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold tracking-wider text-gold">
          {CRUISE_NAME}
        </h1>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSduLjMitxLYSOw7wDyRTwyFMxbGSS1HxA7dFEYOvg3j7VwI9w/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 hidden md:block"
        >
          Nhận Tư Vấn
        </a>
      </div>
    </header>
  );
};

export default Header;