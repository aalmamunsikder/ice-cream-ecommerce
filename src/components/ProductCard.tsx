import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <motion.div 
      className="relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Wishlist button */}
      <button 
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
        aria-label={isWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={18} 
          className={`${isWishlist ? 'fill-mela-pink-500 text-mela-pink-500' : 'text-gray-400'}`} 
        />
      </button>
      
      {/* Product image */}
      <div className="relative pt-6 px-6 flex justify-center">
        <motion.img 
          src={product.image}
          alt={product.name}
          className="h-40 md:h-48 w-auto object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Product details */}
      <div className="flex-1 flex flex-col p-4">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-mela-pink-100 text-mela-pink-600">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-medium text-lg text-mela-brown-700 mb-1">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg text-mela-brown-700">
              ৳{product.price}
            </span>
            
            <div className="flex items-center border border-gray-200 rounded-full">
              <button 
                onClick={decreaseQuantity}
                className="h-7 w-7 flex items-center justify-center rounded-full text-gray-500 hover:text-mela-pink-500 focus:outline-none"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="mx-2 text-sm font-medium text-gray-700">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="h-7 w-7 flex items-center justify-center rounded-full text-gray-500 hover:text-mela-pink-500 focus:outline-none"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 px-4 flex items-center justify-center gap-2 bg-mela-pink-500 hover:bg-mela-pink-600 text-white rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-mela-pink-300"
          >
            <ShoppingBag size={18} />
            <span className="font-medium">কার্টে যোগ করুন</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;