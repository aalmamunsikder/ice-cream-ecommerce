import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="backdrop-blur-sm bg-white/90 rounded-2xl overflow-hidden shadow-lg border border-white/40"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-700"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          width="400"
          height="256"
          onError={(e) => {
            // Fallback image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-mela-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            নতুন
          </div>
        )}
        
        {product.isSpecialOffer && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            স্পেশাল অফার
          </div>
        )}
        
        <motion.button 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-mela-pink-50 border border-white/50 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={18} className="text-mela-pink-500 hover:fill-mela-pink-500 transition-colors" />
        </motion.button>
        
        <motion.button 
          onClick={() => addToCart(product, 1)}
          className="absolute bottom-3 right-3 bg-mela-pink-500 hover:bg-mela-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={16} />
          <span className="font-medium">কিনুন</span>
        </motion.button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-mela-brown-700 group-hover:text-mela-pink-500 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 bg-mela-pink-50 px-2 py-0.5 rounded-full">
            <Star size={12} className="text-mela-pink-500 fill-mela-pink-500" />
            <span className="text-xs font-medium text-mela-pink-600">4.8</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-2 italic">{product.nameEn}</p>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3" />
        
        <div className="flex items-end justify-between mt-4">
          <div>
            <span className="block text-xs text-gray-500 mb-1">মূল্য</span>
            <span className="text-xl font-bold text-mela-brown-800">৳ {product.price}</span>
          </div>
          
          <motion.button 
            onClick={() => addToCart(product, 1)}
            className="hidden sm:flex bg-gradient-to-r from-mela-pink-400 to-mela-pink-500 hover:from-mela-pink-500 hover:to-mela-pink-600 text-white p-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;