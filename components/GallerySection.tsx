import React, { useState, useEffect, useCallback } from 'react';

const galleryImages = [
  "https://picsum.photos/seed/gallery1/1200/800",
  "https://picsum.photos/seed/gallery2/1200/800",
  "https://picsum.photos/seed/gallery3/1200/800",
  "https://picsum.photos/seed/gallery4/1200/800",
  "https://picsum.photos/seed/gallery5/1200/800",
  "https://picsum.photos/seed/gallery6/1200/800",
];

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryImages.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  const getSlideStyle = (index: number): React.CSSProperties => {
    const totalSlides = galleryImages.length;
    let offset = index - currentIndex;
    if (offset > totalSlides / 2) {
      offset -= totalSlides;
    }
    if (offset < -totalSlides / 2) {
      offset += totalSlides;
    }

    let transform = `translateY(-50%) translateX(-50%) scale(0.5)`;
    let left = '50%';
    let opacity = 0;
    let zIndex = 0;

    switch (offset) {
      case 0: // Center
        transform = 'translateY(-50%) translateX(-50%) scale(1)';
        left = '50%';
        opacity = 1;
        zIndex = 10;
        break;
      case -1: // Left
        transform = 'translateY(-50%) translateX(-50%) scale(0.75)';
        left = '25%';
        opacity = 0.6;
        zIndex = 5;
        break;
      case 1: // Right
        transform = 'translateY(-50%) translateX(-50%) scale(0.75)';
        left = '75%';
        opacity = 0.6;
        zIndex = 5;
        break;
      default: // Hidden slides
        left = offset < 0 ? '0%' : '100%';
        transform = `translateY(-50%) translateX(${offset < 0 ? '-50%' : '50%'}) scale(0.5)`;
        opacity = 0;
        zIndex = 0;
        break;
    }

    return { transform, left, opacity, zIndex, position: 'absolute', transition: 'all 0.5s ease-in-out' };
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-4">
          Khoảnh Khắc Ấn Tượng
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
      </div>

      <div className="relative w-full h-[210px] md:h-[350px]" role="region" aria-roledescription="carousel" aria-label="Image gallery">
        
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="top-1/2 w-[50%] md:w-[45%] aspect-[4/3]"
            style={getSlideStyle(index)}
            aria-hidden={currentIndex !== index}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-20">
          {galleryImages.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
              aria-current={currentIndex === slideIndex}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            >
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
