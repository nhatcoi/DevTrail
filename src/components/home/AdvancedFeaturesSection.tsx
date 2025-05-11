'use client';

import { motion } from 'framer-motion';
import { FileUp, Palette, Link as LinkIcon, BarChart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';



export default function AdvancedFeaturesSection() {
  const { dictionary } = useLanguage();

  const advancedFeatures = [
    {
      title: dictionary.home.features.items.cv.title,
      description: dictionary.home.features.items.cv.description,
      icon: <FileUp className="h-12 w-12 text-blue-600" />,
      imageUrl: '/images/feature-import.png'
    },
    {
      title: dictionary.home.features.items.portfolio.title,
      description: dictionary.home.features.items.portfolio.description,
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      imageUrl: '/images/feature-portfolio.png'
    },
    {
      title: dictionary.home.features.items.share.title,
      description: dictionary.home.features.items.share.description,
      icon: <LinkIcon className="h-12 w-12 text-blue-600" />,
      imageUrl: '/images/feature-share.png'
    },
    {
      title: dictionary.home.features.items.analytics.title,
      description: dictionary.home.features.items.analytics.description,
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      imageUrl: '/images/feature-analytics.png'
    }
  ];

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

        <div className="space-y-20">
          {advancedFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold">{index + 1}. {feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
              </div>
              
              {/* Image */}
              <div className="lg:w-1/2 h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Placeholder for feature image */}
                <div className="text-gray-400 text-center p-8">
                  <p>Illustration for "{feature.title}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 