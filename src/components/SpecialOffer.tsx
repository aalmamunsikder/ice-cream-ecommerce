import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShoppingCart } from 'lucide-react';

const SpecialOffer: React.FC = () => {
  // Target end date for the offer - set to 7 days from now by default
  const [endDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = useCallback(() => {
    const difference = endDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }, [endDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const isOfferExpired = 
    timeLeft.days === 0 && 
    timeLeft.hours === 0 && 
    timeLeft.minutes === 0 && 
    timeLeft.seconds === 0;
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mela-brown-700 via-mela-brown-800 to-mela-brown-900 -z-10"></div>
      
      {/* Animated blobs - reduced number for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-80 h-80 bg-mela-pink-500/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-mela-pink-400/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>
      
      {/* Floating particles - reduced for better performance */}
      <div className="absolute inset-0 overflow-hidden opacity-30 hidden md:block">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center p-1.5 bg-mela-pink-500/20 rounded-md">
                <Clock size={16} className="text-mela-pink-400" />
              </span>
              <p className="text-mela-pink-400 font-medium">সীমিত সময়ের অফার</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              বিশেষ <span className="text-mela-pink-400 relative">
                অফার
                <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-500/30 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              আমাদের প্রিমিয়াম আম আইসক্রিম কিনুন এবং পান <span className="text-mela-pink-400 font-bold">৩০% ছাড়</span>। সীমিত সময়ের জন্য এই অফার চলবে।
            </p>
            
            {!isOfferExpired ? (
              <div className="grid grid-cols-4 gap-2 md:gap-3 mb-8">
                {[
                  { value: formatNumber(timeLeft.days), label: 'দিন' },
                  { value: formatNumber(timeLeft.hours), label: 'ঘন্টা' },
                  { value: formatNumber(timeLeft.minutes), label: 'মিনিট' },
                  { value: formatNumber(timeLeft.seconds), label: 'সেকেন্ড' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="backdrop-blur-md bg-white/10 p-3 md:p-4 rounded-xl text-center border border-white/10"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white block">{item.value}</span>
                    <p className="text-white/80 text-xs md:text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl text-center border border-white/10 mb-8">
                <p className="text-white text-lg">অফারটি শেষ হয়েছে!</p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-mela-pink-500 to-mela-pink-400 px-6 md:px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  এখনই কিনুন 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <button 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 md:px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-white/20"
              >
                <span className="relative flex items-center gap-2">
                  কার্টে যোগ করুন 
                  <ShoppingCart size={18} />
                </span>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            style={{ y }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm mx-auto"
              whileHover={{ rotate: -3, scale: 1.02 }}
            >
              {/* Background glow effect */}
              <div className="absolute -z-10 inset-0 blur-2xl bg-mela-pink-400/20 rounded-full transform translate-x-10 translate-y-10"></div>
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5]">
                <img 
                  src="https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1" 
                  alt="আম আইসক্রিম" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="750"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Discount card with fixed z-index to ensure it appears above the image */}
              <motion.div 
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/90 p-4 md:p-5 rounded-2xl shadow-xl border border-white/50 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-mela-pink-500 to-mela-pink-600 text-white text-xl md:text-2xl font-bold h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-lg">
                      <span>৩০%</span>
                    </div>
                    <motion.div 
                      className="absolute -z-10 inset-0 rounded-full bg-mela-pink-400/30 blur-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-mela-brown-700">বিশেষ ছাড়</h4>
                    <p className="text-mela-pink-500">সীমিত সময়ের জন্য</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;