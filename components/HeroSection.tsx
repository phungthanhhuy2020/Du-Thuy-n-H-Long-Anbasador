
import React from 'react';
import { CRUISE_NAME } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/halongbay/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-4 leading-tight tracking-wide">
          Kiệt Tác Giữa Lòng Vịnh Hạ Long
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-cream max-w-3xl mx-auto">
          Trải Nghiệm Kỳ Quan Trên Siêu Du Thuyền {CRUISE_NAME}
        </p>
        <p className="text-xl md:text-2xl font-light italic mb-12">
          "Nơi mọi khoảnh khắc đều trở thành ký ức vô giá."
        </p>
        <button 
          onClick={scrollToForm}
          className="bg-gold text-navy font-bold text-lg py-4 px-10 rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 shadow-2xl"
        >
          Nhận Tư Vấn Lịch Trình
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
