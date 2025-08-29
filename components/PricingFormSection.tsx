import React from 'react';

const PricingFormSection: React.FC = () => {
  return (
    <section id="booking-form" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Báo Giá Dịch Vụ & Ưu Đãi Độc Quyền
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <p className="max-w-3xl mx-auto text-lg text-cream mb-8">
          Điền thông tin vào biểu mẫu dưới đây để nhận báo giá chi tiết và ưu đãi lên đến <strong className="text-gold">20%</strong> cho nhóm đi từ 4 người!
        </p>

        <div className="max-w-md mx-auto">
           <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSduLjMitxLYSOw7wDyRTwyFMxbGSS1HxA7dFEYOvg3j7VwI9w/viewform?embedded=true" 
            width="100%" 
            height="550" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="rounded-lg shadow-2xl"
            title="Form Báo Giá Dịch Vụ & Ưu Đãi Độc Quyền"
          >
            Đang tải…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default PricingFormSection;