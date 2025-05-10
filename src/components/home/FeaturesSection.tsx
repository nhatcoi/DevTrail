'use client';

import { motion } from 'framer-motion';
import { File, Edit, Layout, FileCheck, Save, Users } from 'lucide-react';

const features = [
  {
    title: 'Mẫu CV chuyên biệt cho dân IT',
    description: 'Tối ưu nội dung, bố cục theo chuẩn tuyển dụng ngành Công nghệ Thông tin.',
    icon: <File className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Chỉnh sửa CV dễ dàng, preview theo thời gian thực',
    description: 'Thêm/sửa thông tin nhanh chóng, xem trước kết quả tức thì.',
    icon: <Edit className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Portfolio cá nhân tự động từ CV',
    description: 'Không cần code – hệ thống tự dựng portfolio từ CV của bạn.',
    icon: <Layout className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Xuất file PDF sắc nét, định dạng đúng chuẩn',
    description: 'Dùng khi ứng tuyển, chia sẻ hoặc in ấn dễ dàng.',
    icon: <FileCheck className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Lưu nhiều CV, dễ dàng quản lý và chỉnh sửa',
    description: 'Tùy biến theo từng vị trí ứng tuyển khác nhau.',
    icon: <Save className="h-8 w-8 text-blue-600" />
  },
  {
    title: 'Hỗ trợ nhiều người dùng cùng lúc',
    description: 'Một tài khoản có thể quản lý nhiều CV và portfolio khác nhau.',
    icon: <Users className="h-8 w-8 text-blue-600" />
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tính năng nổi bật</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Giúp bạn tạo CV chuyên nghiệp chỉ trong vài phút.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 