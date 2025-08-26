
import React, { useState } from 'react';

const PricingFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      console.log({ name, phone });
      setSubmitted(true);
    }
  };

  return (
    <section id="booking-form" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Báo Giá Dịch Vụ & Ưu Đãi Độc Quyền
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <p className="max-w-3xl mx-auto text-lg text-cream mb-8">
          Để lại thông tin để nhận báo giá chi tiết và ưu đãi lên đến <strong className="text-gold">20%</strong> cho nhóm đi từ 4 người!
        </p>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-emerald text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Cảm ơn bạn!</h3>
              <p className="mt-2">Chúng tôi đã nhận được thông tin. Chuyên viên tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-lg shadow-2xl backdrop-blur-sm">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Số Điện Thoại / Zalo"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-4 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy font-bold text-lg py-4 px-10 rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
              >
                Gửi Yêu Cầu Tư Vấn
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingFormSection;
