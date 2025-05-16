import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { locations } from '../data/locations';
import SectionHeading from './SectionHeading';

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
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mela-pink-50 -z-10"></div>
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 bottom-0 w-80 h-80 bg-mela-pink-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute -left-20 top-1/3 w-96 h-96 bg-mela-pink-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              badge="আমাদের লোকেশন সমূহ"
              title="আমাদের"
              highlightedText="অবস্থান"
              description="বাংলাদেশের বিভিন্ন জায়গায় আমাদের শাখা রয়েছে। আপনার নিকটতম শাখায় আসুন এবং আমাদের বিভিন্ন স্বাদের আইসক্রিম উপভোগ করুন।"
              centered={true}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                variants={itemVariants}
                className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-white/50 transition-transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                    <motion.img 
                      src={location.image} 
                      alt={location.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-mela-brown-700 mb-6">{location.name}</h3>
                      
                      <div className="space-y-5">
                        <div className="flex items-start gap-4">
                          <div className="p-2.5 rounded-full bg-mela-pink-50 text-mela-pink-500">
                            <MapPin size={20} />
                          </div>
                          <div>
                            <p className="text-mela-brown-700">{location.address}</p>
                            <p className="text-mela-brown-700">{location.city}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-full bg-mela-pink-50 text-mela-pink-500">
                            <Phone size={20} />
                          </div>
                          <p className="text-mela-brown-700">{location.phone}</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-full bg-mela-pink-50 text-mela-pink-500">
                            <Clock size={20} />
                          </div>
                          <p className="text-mela-brown-700">{location.openingHours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="mt-8 group inline-flex items-center text-mela-pink-500 hover:text-mela-pink-600 font-medium text-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      দিকনির্দেশনা পান 
                      <ArrowUpRight size={20} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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