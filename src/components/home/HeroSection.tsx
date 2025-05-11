'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n';

export default function HeroSection() {
  const { dictionary } = useLanguage();
  
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevTrail</span> 🚀
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              {dictionary.home.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10">
              {dictionary.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/cv"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition transform hover:scale-105 active:scale-95 text-center"
              >
                {dictionary.home.hero.cta}
              </Link>
              <Link 
                href="/features"
                className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center"
              >
                {dictionary.footer.features}
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              {dictionary.home.hero.users}
            </p>
          </motion.div>

          {/* Right image */}
          <motion.div 
            className="relative w-full md:w-2/5 h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl" />
            <div className="relative h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl">
              {/* Placeholder for screenshot */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-center">Preview của CV</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 