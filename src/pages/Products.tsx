import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  return (
    <div className="pt-20 pb-16">
      <div className="bg-mela-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
            আমাদের <span className="text-mela-pink-500">পণ্য সমূহ</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            আইসক্রিম মেলার বিভিন্ন ধরনের আইসক্রিম। বিভিন্ন স্বাদে আপনার পছন্দমত আইসক্রিম বেছে নিন।
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <button 
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null 
                ? 'bg-mela-pink-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } transition-colors`}
          >
            সব
          </button>
          
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category 
                  ? 'bg-mela-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;