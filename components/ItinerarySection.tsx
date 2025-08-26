
import React from 'react';
import { itinerary } from '../constants';

const ItinerarySection: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Khám Phá Lịch Trình Trong Mơ
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/50 hidden md:block"></div>
          {itinerary.map((item, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <div className="hidden md:flex w-1/2"></div>
              <div className="z-10 hidden md:flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-gold shadow-md"></div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:mx-4">
                  <p className="text-gold font-bold mb-2">{item.time}</p>
                  <h3 className="text-2xl font-serif text-navy font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
