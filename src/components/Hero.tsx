import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.png';
import wave from '../assets/svg/wave.svg';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 md:pb-16 overflow-hidden bg-mela-pink-50">
      {/* Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img src={wave} alt="" className="w-full h-auto transform translate-y-1" />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 py-4 md:py-16 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-mela-brown-500 mb-2 text-base md:text-lg lg:text-xl font-medium">স্বাদের মেলায় আপনাকে স্বাগতম</h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-mela-brown-700 leading-tight">
              স্বাদের জগতে <br className="hidden md:block" />
              <span className="text-mela-pink-500">অনন্য অভিজ্ঞতা</span>
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
              আইসক্রিম মেলায় আপনাকে স্বাগতম! আমাদের প্রিমিয়াম আইসক্রিম, কালচার এবং আরও অনেক কিছু দিয়ে তৈরি করা সবচেয়ে মিষ্টি অভিজ্ঞতা উপভোগ করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/products" className="btn-primary w-full sm:w-auto">
                এখনই কিনুন
              </Link>
              <Link to="/about" className="btn-secondary w-full sm:w-auto">
                আমাদের সম্পর্কে
              </Link>
            </div>
          </motion.div>
          
          {/* Right side image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative px-0 md:px-0 -mt-4 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full opacity-75 filter blur-md"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-mela-pink-100 rounded-full opacity-60 filter blur-md"></div>
            
            {/* Hero image */}
            <img 
              src={heroImage} 
              alt="Ice cream varieties" 
              className="relative max-w-full h-auto w-3/4 sm:w-2/3 md:w-auto z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 