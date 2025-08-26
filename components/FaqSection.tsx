
import React from 'react';
import { faqItems } from '../constants';
import Accordion from './ui/Accordion';

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <Accordion key={index} title={item.question}>
              <p className="text-gray-600">{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
