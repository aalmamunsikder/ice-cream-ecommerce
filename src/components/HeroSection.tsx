import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-white to-mela-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-mela-pink-200 rounded-full filter blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -left-20 top-40 w-72 h-72 bg-mela-pink-300 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-mela-pink-100 rounded-full filter blur-xl opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-mela-pink-200 rounded-full filter blur-xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mela-brown-700 leading-tight">
                আইস <span className="text-mela-pink-500 relative">
                  ক্রিম
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
                </span> <br />
                <span className="text-mela-pink-500 relative">
                  মেলা
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
                </span>
              </h1>
              <p className="text-xl text-mela-brown-600 max-w-lg">
                <span className="font-semibold text-mela-pink-600">প্রতিটি চামচে একটি স্বপ্নের স্বাদ!</span> আমাদের অতুলনীয় স্বাদে হারিয়ে যান, যেখানে প্রাকৃতিক উপাদান আর সৃজনশীলতা একসাথে মিশে প্রতিটি মুহূর্তকে করে তোলে অবিস্মরণীয়।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link 
                  to="/products" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-mela-pink-500 to-mela-pink-400 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="relative flex items-center gap-2">
                    এখনই কিনুন 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <button className="inline-flex items-center justify-center gap-3 text-mela-brown-700 font-medium hover:text-mela-pink-500 transition-all duration-300 group">
                  <span className="relative overflow-hidden rounded-full w-9 h-9 flex items-center justify-center bg-mela-pink-100 group-hover:bg-mela-pink-200 transition-colors">
                    <PlayCircle size={24} className="text-mela-pink-500" />
                  </span>
                  <span>আমাদের সম্পর্কে জানুন</span>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="relative z-10"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ 
                rotateY: scrollY * 0.02,
                rotateX: scrollY * -0.01
              }}
            >
              <img 
                src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="আইসক্রিম কোন" 
                className="rounded-2xl shadow-2xl object-cover w-full"
                loading="eager"
                width="600"
                height="400"
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 backdrop-blur-md bg-white/80 p-4 rounded-xl shadow-lg border border-white/50 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="চকোলেট আইসক্রিম" 
                    className="w-16 h-16 rounded-lg object-cover"
                    loading="eager"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h4 className="font-bold text-mela-brown-700">সবচেয়ে জনপ্রিয়</h4>
                    <p className="text-mela-pink-500">চকোলেট আইসক্রিম</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 backdrop-blur-md bg-white/80 px-5 py-3 rounded-full shadow-lg border border-white/50 z-20"
                animate={{ rotate: [0, 5, 0] }}
                transition={{
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-mela-brown-700 font-bold">১০০% <span className="text-mela-pink-500">প্রাকৃতিক</span></span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[
            { value: '২০+', label: 'আইসক্রিম স্বাদ' },
            { value: '৫+', label: 'লোকেশন' },
            { value: '১২+', label: 'বছরের অভিজ্ঞতা' },
            { value: '১০০%', label: 'গ্রাহক সন্তুষ্টি' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/80 p-5 rounded-xl shadow-md border border-white/50"
            >
              <h3 className="text-2xl font-bold text-mela-brown-700">{stat.value}</h3>
              <p className="text-mela-pink-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;