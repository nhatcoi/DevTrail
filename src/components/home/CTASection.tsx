'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CTASection() {
  const { dictionary } = useLanguage();
  const { cta } = dictionary.home;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {cta.title}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            {cta.subtitle}
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition transform hover:scale-105 active:scale-95 text-center"
            >
              {cta.primary}
            </Link>
            <Link
              href="/cv"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition transform hover:scale-105 active:scale-95 text-center"
            >
              {cta.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 