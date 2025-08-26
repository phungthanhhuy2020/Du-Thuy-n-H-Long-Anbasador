
import React from 'react';
import { packages } from '../constants';

const PackagesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Lựa Chọn Hành Trình Lý Tưởng Của Bạn
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-navy mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <button className="text-gold font-bold hover:text-yellow-500 transition-colors duration-300">
                  Xem Chi Tiết &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
