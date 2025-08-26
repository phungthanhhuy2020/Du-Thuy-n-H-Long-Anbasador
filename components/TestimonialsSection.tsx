
import React from 'react';
import { testimonials } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" style={{ backgroundImage: "url('/img/subtle-pattern.png')"}}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Khách Hàng Nói Gì Về Chúng Tôi?
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream p-8 rounded-lg shadow-lg text-center">
              <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-white shadow-md" />
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-navy text-lg">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
