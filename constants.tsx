
import React from 'react';
import type { Feature, Package, ItineraryItem, Testimonial, FaqItem } from './types';

export const CRUISE_NAME = "La Belle Vie Cruise";

export const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Du thuyền Hiện đại",
    description: "Du thuyền 5 sao thế hệ mới nhất, trang bị công nghệ hiện đại, đảm bảo an toàn tuyệt đối cho hành trình của bạn."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10h6" /></svg>
    ),
    title: "Lịch trình Độc đáo",
    description: "Khám phá những vịnh và hang động hoang sơ, tách biệt khỏi các tuyến du lịch đông đúc thông thường."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v.01M12 12v.01M12 16v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Ẩm thực Thượng hạng",
    description: "Thực đơn được chế biến bởi các đầu bếp hàng đầu, kết hợp tinh hoa ẩm thực Á-Âu đặc sắc."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: "Dịch vụ Tận tâm",
    description: "Đội ngũ chuyên nghiệp, tận tâm, được đào tạo bài bản và sẵn sàng phục vụ quý khách 24/7."
  }
];

export const packages: Package[] = [
  {
    image: "https://picsum.photos/seed/romance/800/600",
    title: "Tour 2N1Đ Lãng Mạn",
    description: "Hành trình hoàn hảo cho các cặp đôi, tận hưởng hoàng hôn trên vịnh và bữa tối riêng tư dưới ánh nến."
  },
  {
    image: "https://picsum.photos/seed/explore/800/600",
    title: "Tour 3N2Đ Khám Phá",
    description: "Đi sâu hơn vào những kỳ quan ẩn giấu của Vịnh Hạ Long, trải nghiệm trọn vẹn vẻ đẹp hoang sơ."
  },
  {
    image: "https://picsum.photos/seed/suite/800/600",
    title: "Phòng Suite Hướng Biển",
    description: "Nghỉ dưỡng trong không gian sang trọng bậc nhất với ban công riêng và tầm nhìn toàn cảnh ra vịnh."
  }
];

export const itinerary: ItineraryItem[] = [
  {
    time: "Ngày 1: 12:00",
    title: "Check-in & Bữa trưa",
    description: "Chào mừng quý khách lên du thuyền, thưởng thức đồ uống và bữa trưa thượng hạng trong khi du thuyền bắt đầu hành trình.",
    image: "https://picsum.photos/seed/checkin/400/300"
  },
  {
    time: "Ngày 1: 15:00",
    title: "Chèo Kayak ở Vịnh Lan Hạ",
    description: "Tự do khám phá vẻ đẹp của Vịnh Lan Hạ bằng thuyền kayak, len lỏi qua các hang động và bãi tắm hoang sơ.",
    image: "https://picsum.photos/seed/kayak/400/300"
  },
  {
    time: "Ngày 1: 18:00",
    title: "Lớp học Nấu ăn & Hoàng hôn",
    description: "Tham gia lớp học nấu các món ăn truyền thống Việt Nam và chiêm ngưỡng cảnh hoàng hôn huyền ảo trên boong tàu.",
    image: "https://picsum.photos/seed/cooking/400/300"
  },
  {
    time: "Ngày 2: 06:30",
    title: "Tập Thái Cực Quyền",
    description: "Bắt đầu ngày mới đầy năng lượng với bài tập Thái Cực Quyền giữa không gian yên bình của vịnh vào buổi sáng.",
    image: "https://picsum.photos/seed/taichi/400/300"
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Một trải nghiệm không thể nào quên! Dịch vụ hoàn hảo, đồ ăn ngon và cảnh vật thì tuyệt đẹp. Chắc chắn sẽ quay lại.",
    author: "Gia đình anh Minh, Hà Nội",
    image: "https://picsum.photos/seed/family1/100/100"
  },
  {
    quote: "Chuyến đi trăng mật của chúng tôi đã trở nên thật đặc biệt nhờ La Belle Vie. Sự lãng mạn và tinh tế trong từng chi tiết.",
    author: "Vợ chồng chị Lan Anh, TP.HCM",
    image: "https://picsum.photos/seed/couple1/100/100"
  },
  {
    quote: "Du thuyền rất mới và sang trọng. Lịch trình hợp lý, không quá đông đúc. Tôi rất hài lòng với đội ngũ nhân viên.",
    author: "Anh David, Khách quốc tế",
    image: "https://picsum.photos/seed/guest1/100/100"
  }
];

export const faqItems: FaqItem[] = [
    {
        question: "Tour đã bao gồm những dịch vụ gì?",
        answer: "Tour của chúng tôi bao gồm tất cả các bữa ăn trên du thuyền, vé tham quan các điểm trong lịch trình, hoạt động chèo kayak, lớp học nấu ăn, và phòng nghỉ theo tiêu chuẩn 5 sao. Đồ uống và các dịch vụ cá nhân khác sẽ được tính riêng."
    },
    {
        question: "Chính sách dành cho trẻ em như thế nào?",
        answer: "Trẻ em dưới 5 tuổi được miễn phí nếu ngủ chung giường với bố mẹ. Trẻ em từ 5 đến 11 tuổi tính 75% giá người lớn. Từ 12 tuổi trở lên được tính như người lớn. Vui lòng liên hệ để biết thêm chi tiết."
    },
    {
        question: "Tôi cần chuẩn bị những gì cho chuyến đi?",
        answer: "Bạn nên mang theo đồ bơi, kem chống nắng, mũ, kính râm và máy ảnh. Du thuyền có trang bị sẵn các vật dụng cá nhân cơ bản. Ngoài ra, hãy mang theo giấy tờ tùy thân để làm thủ tục check-in."
    },
    {
        question: "Làm thế nào để đặt tour?",
        answer: "Quý khách vui lòng để lại thông tin ở form bên trên, đội ngũ tư vấn viên của chúng tôi sẽ liên hệ lại ngay để tư vấn lịch trình chi tiết và gửi báo giá ưu đãi nhất."
    }
]
