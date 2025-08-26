
import React from 'react';
import { features, CRUISE_NAME } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Điều Gì Làm Nên Sự Khác Biệt Của {CRUISE_NAME}?
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
