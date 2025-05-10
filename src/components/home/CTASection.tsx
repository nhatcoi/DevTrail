'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng tạo CV chuyên nghiệp?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            Bắt đầu miễn phí ngay hôm nay và xây dựng portfolio cá nhân ấn tượng.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition transform hover:scale-105 active:scale-95 text-center"
            >
              Đăng ký miễn phí
            </Link>
            <Link
              href="/cv"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition transform hover:scale-105 active:scale-95 text-center"
            >
              Xem mẫu CV
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 