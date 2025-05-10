'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Miễn phí',
    price: '0',
    description: 'Hoàn hảo cho việc bắt đầu',
    features: [
      'Quản lý tác vụ cơ bản',
      'Phiên tập trung hàng ngày',
      'Phân tích cơ bản',
      '3 Dự án',
      'Truy cập ứng dụng di động'
    ],
    cta: 'Bắt đầu',
    ctaLink: '/auth/register',
    popular: false
  },
  {
    name: 'Chuyên nghiệp',
    price: '9.99',
    description: 'Dành cho năng suất cao',
    features: [
      'Tất cả trong gói Miễn phí',
      'Dự án không giới hạn',
      'Phân tích nâng cao',
      'Thiết lập và theo dõi mục tiêu',
      'Hỗ trợ ưu tiên',
      'Hợp tác nhóm (tối đa 3 người)'
    ],
    cta: 'Bắt đầu dùng thử 14 ngày',
    ctaLink: '/auth/register?plan=pro',
    popular: true
  },
  {
    name: 'Doanh nghiệp',
    price: '29.99',
    description: 'Dành cho các nhóm và tổ chức',
    features: [
      'Tất cả trong gói Chuyên nghiệp',
      'Thành viên nhóm không giới hạn',
      'Quyền hạn nâng cao',
      'Bảng điều khiển Admin',
      'Truy cập API',
      'Hỗ trợ đặc biệt',
      'Tích hợp tùy chỉnh'
    ],
    cta: 'Liên hệ bộ phận bán hàng',
    ctaLink: '/contact',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chọn Gói Phù Hợp Với Bạn</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Các lựa chọn linh hoạt phù hợp với cá nhân và nhóm mọi kích cỡ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                ${plan.popular ? 'ring-2 ring-blue-500 transform md:-translate-y-4' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-sm font-semibold text-center py-1">
                  Phổ biến nhất
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">/tháng</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium 
                    ${plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                    } transition`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 