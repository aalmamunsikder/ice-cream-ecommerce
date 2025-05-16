import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  // Ensure we get exactly 4 featured products, prioritizing popular ones
  const featuredProducts = products
    .filter(product => product.isPopular || product.isNew)
    .slice(0, 4);
  
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
    <section className="py-24 relative overflow-hidden" id="featured-products">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-mela-pink-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-mela-pink-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center p-1 bg-mela-pink-100 rounded-md">
                  <Star size={16} className="text-mela-pink-500 fill-mela-pink-500" />
                </span>
                <p className="text-mela-pink-500 font-medium">আমাদের সেরা পণ্য</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mela-brown-700">জনপ্রিয় <span className="text-mela-pink-500 relative">
                স্বাদ
                <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
              </span></h2>
              <p className="text-gray-600 mt-2 max-w-md">আমাদের সবচেয়ে জনপ্রিয় আইসক্রিম স্বাদ সমূহ যা আপনাকে মুগ্ধ করবে</p>
            </div>
            
            <Link 
              to="/products" 
              className="hidden md:flex items-center gap-1 text-mela-pink-500 hover:text-mela-pink-600 font-medium group"
            >
              <span>সবগুলো দেখুন</span> 
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.length === 0 ? (
              <div className="col-span-full text-center py-10">
                <p className="text-mela-brown-700">আপাতত কোন আইসক্রিম উপলব্ধ নেই। শীঘ্রই আবার চেক করুন।</p>
              </div>
            ) : (
              featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -8 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center md:hidden"
        >
          <Link 
            to="/products" 
            className="inline-flex items-center gap-1 px-6 py-3 rounded-full bg-mela-pink-50 text-mela-pink-500 hover:bg-mela-pink-100 font-medium transition-colors"
          >
            সবগুলো দেখুন <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;