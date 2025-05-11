'use client';

import { motion } from 'framer-motion';
import { File, Edit, Layout, FileCheck, Save, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const featureIcons = [
  <File key="file" className="h-8 w-8 text-blue-600" />,
  <Edit key="edit" className="h-8 w-8 text-blue-600" />,
  <Layout key="layout" className="h-8 w-8 text-blue-600" />,
  <FileCheck key="filecheck" className="h-8 w-8 text-blue-600" />,
  <Save key="save" className="h-8 w-8 text-blue-600" />,
  <Users key="users" className="h-8 w-8 text-blue-600" />
];

type Feature = {
  title: string;
  description: string;
};

export default function FeaturesSection() {
  const { dictionary } = useLanguage();
  const features = dictionary.home.features.list as Feature[];
  
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.home.features.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {dictionary.home.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className="mb-4">
                {featureIcons[index]}
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