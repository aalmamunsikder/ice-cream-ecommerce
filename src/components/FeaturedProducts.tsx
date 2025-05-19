import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { products } from '../data/products';
import SectionHeading from './SectionHeading';

const FeaturedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  const filteredFeaturedProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory && (product.isPopular || product.isNew))
    : products.filter(product => product.isPopular || product.isNew);
  
  // Get 6 featured products (or all if less than 6)
  const displayProducts = filteredFeaturedProducts.slice(0, 6);
  
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
    <section className="py-16 overflow-hidden bg-gradient-to-b from-white to-mela-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-mela-brown-700">
              আমাদের{' '}
              <span className="inline-flex flex-col relative">
                <span className="text-mela-pink-500">জনপ্রিয়</span>
                <span className="h-2 bg-mela-pink-200 w-full absolute -bottom-1 transform -rotate-1"></span>
              </span>{' '}
              পণ্যসমূহ
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl">
              আমাদের সবচেয়ে বিক্রয় হওয়া এবং জনপ্রিয় আইসক্রিমগুলি দেখুন 
            </p>
          </motion.div>
          
          <Link 
            to="/products" 
            className="hidden md:flex items-center text-mela-pink-500 font-medium hover:text-mela-pink-600 transition-colors"
          >
            <span>সকল পণ্য দেখুন</span>
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        {/* Category filter */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === null
                  ? 'bg-mela-pink-500 text-white'
                  : 'bg-mela-pink-100 text-mela-pink-700 hover:bg-mela-pink-200'
              }`}
            >
              সকল
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-mela-pink-500 text-white'
                    : 'bg-mela-pink-100 text-mela-pink-700 hover:bg-mela-pink-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile view "View all" button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            to="/products" 
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <span>সকল পণ্য দেখুন</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;