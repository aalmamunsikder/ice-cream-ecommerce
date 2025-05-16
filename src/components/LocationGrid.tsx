import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { locations } from '../data/locations';

const LocationGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
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
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mela-pink-50 -z-10"></div>
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-mela-pink-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute -left-20 top-1/3 w-80 h-80 bg-mela-pink-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block bg-mela-pink-50 text-mela-pink-500 px-4 py-1.5 rounded-full font-medium text-sm mb-3">
              আমাদের লোকেশন সমূহ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mela-brown-700">
              আমাদের <span className="text-mela-pink-500 relative">
                অবস্থান
                <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              বাংলাদেশের বিভিন্ন জায়গায় আমাদের শাখা রয়েছে। আপনার নিকটতম শাখায় আসুন এবং আমাদের বিভিন্ন স্বাদের আইসক্রিম উপভোগ করুন।
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                variants={itemVariants}
                className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-white/50 transition-transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 relative overflow-hidden">
                    <motion.img 
                      src={location.image} 
                      alt={location.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 md:p-8 w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-mela-brown-700 mb-4">{location.name}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-full bg-mela-pink-50">
                            <MapPin size={18} className="text-mela-pink-500" />
                          </div>
                          <div>
                            <p className="text-gray-700">{location.address}</p>
                            <p className="text-gray-700">{location.city}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-mela-pink-50">
                            <Phone size={18} className="text-mela-pink-500" />
                          </div>
                          <p className="text-gray-700">{location.phone}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-mela-pink-50">
                            <Clock size={18} className="text-mela-pink-500" />
                          </div>
                          <p className="text-gray-700">{location.openingHours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="mt-6 group inline-flex items-center text-mela-pink-500 hover:text-mela-pink-600 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      দিকনির্দেশনা পান 
                      <ArrowUpRight size={18} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationGrid;