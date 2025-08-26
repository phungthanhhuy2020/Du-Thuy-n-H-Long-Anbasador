
import React from 'react';

const galleryImages = [
  "https://picsum.photos/seed/gallery1/600/800",
  "https://picsum.photos/seed/gallery2/800/600",
  "https://picsum.photos/seed/gallery3/600/600",
  "https://picsum.photos/seed/gallery4/800/600",
  "https://picsum.photos/seed/gallery5/600/800",
  "https://picsum.photos/seed/gallery6/600/600",
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Khoảnh Khắc Ấn Tượng
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="columns-2 md:columns-3 gap-4">
            {galleryImages.map((src, index) => (
                <img 
                    key={index} 
                    className="w-full h-auto mb-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer" 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
