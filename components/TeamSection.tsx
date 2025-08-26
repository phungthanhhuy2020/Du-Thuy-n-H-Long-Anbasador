
import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-navy mb-4">
          Linh Hồn Của Những Chuyến Đi
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="md:w-1/3">
            <img src="https://picsum.photos/seed/captain/400/400" alt="Thuyền trưởng" className="w-48 h-48 mx-auto rounded-full shadow-lg border-4 border-gold" />
            <h3 className="text-2xl font-serif font-bold text-navy mt-6">Thuyền trưởng John Doe</h3>
            <p className="text-gray-600 mt-2">Với hơn 20 năm kinh nghiệm trên Vịnh Hạ Long, ông đảm bảo mọi hải trình đều an toàn và thú vị.</p>
          </div>
          <div className="md:w-1/3">
            <img src="https://picsum.photos/seed/chef/400/400" alt="Bếp trưởng" className="w-48 h-48 mx-auto rounded-full shadow-lg border-4 border-gold" />
            <h3 className="text-2xl font-serif font-bold text-navy mt-6">Bếp trưởng Jane Smith</h3>
            <p className="text-gray-600 mt-2">Nghệ sĩ ẩm thực tài hoa, người thổi hồn vào từng món ăn, mang đến trải nghiệm vị giác khó quên.</p>
          </div>
        </div>
        <div className="mt-16">
            <img src="https://picsum.photos/seed/fooddisplay/1200/400" alt="Ẩm thực" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
