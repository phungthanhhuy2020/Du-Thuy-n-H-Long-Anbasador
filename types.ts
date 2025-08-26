
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Package {
  image: string;
  title: string;
  description: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
