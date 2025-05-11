'use client';

import { motion } from 'framer-motion';
import { Code, CheckSquare, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function WhyChooseUsSection() {
  const { dictionary } = useLanguage();
  const { why } = dictionary.home;

  const reasons = [
    {
      title: why.tech.title,
      subtitle: why.tech.subtitle,
      description: why.tech.points,
      icon: <Code className="h-12 w-12 text-blue-600" />
    },
    {
      title: why.hiring.title,
      subtitle: why.hiring.subtitle,
      description: why.hiring.points,
      icon: <CheckSquare className="h-12 w-12 text-blue-600" />
    },
    {
      title: why.performance.title,
      subtitle: why.performance.subtitle,
      description: why.performance.points,
      icon: <Zap className="h-12 w-12 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{why.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {why.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{reason.subtitle}</p>
              <ul className="space-y-3">
                {reason.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 