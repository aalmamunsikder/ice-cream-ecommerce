import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

interface CartItemsProps {
  showControls?: boolean;
}

const CartItems: React.FC<CartItemsProps> = ({ showControls = true }) => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  const handleRemove = (productId: number) => {
    removeFromCart(productId);
  };
  
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">আপনার কার্টে কোন পণ্য নেই।</p>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Cart item headers - desktop only */}
      <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-500 pb-2 border-b">
        <div className="md:col-span-6">পণ্য</div>
        <div className="md:col-span-2 text-center">মূল্য</div>
        <div className="md:col-span-3 text-center">পরিমাণ</div>
        <div className="md:col-span-1 text-right"></div>
      </div>
      
      {/* Cart items */}
      {items.map((item) => (
        <div 
          key={item.product.id}
          className="grid grid-cols-5 md:grid-cols-12 gap-2 md:gap-4 items-center py-4 border-b border-gray-100"
        >
          {/* Product image and details */}
          <div className="col-span-5 md:col-span-6 flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-mela-pink-50 rounded-lg overflow-hidden">
              <img 
                src={item.product.image} 
                alt={item.product.name} 
                className="w-full h-full object-contain p-2"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-medium text-mela-brown-700 truncate">
                {item.product.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.product.category}</p>
              
              {/* Mobile price */}
              <div className="md:hidden mt-1 flex items-center justify-between">
                <p className="text-sm font-medium text-mela-brown-700">
                  ৳{item.product.price}
                </p>
                
                {!showControls && (
                  <p className="text-xs text-gray-500">
                    {item.quantity} × ৳{item.product.price} = ৳{item.product.price * item.quantity}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Price - desktop only */}
          <div className="hidden md:block md:col-span-2 text-center">
            <span className="font-medium text-mela-brown-700">৳{item.product.price}</span>
          </div>
          
          {/* Quantity controls */}
          {showControls ? (
            <div className="col-span-4 md:col-span-3 flex items-center justify-center mt-4 md:mt-0">
              <div className="flex items-center border border-gray-200 rounded-full">
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${
                    item.quantity <= 1 ? 'text-gray-300' : 'text-gray-500 hover:text-mela-pink-500'
                  }`}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                
                <span className="mx-3 text-sm font-medium text-gray-700">
                  {item.quantity}
                </span>
                
                <button 
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="flex items-center justify-center h-8 w-8 rounded-full text-gray-500 hover:text-mela-pink-500"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:block md:col-span-3 text-center">
              <span className="font-medium text-mela-brown-700">
                {item.quantity}
              </span>
            </div>
          )}
          
          {/* Remove button */}
          {showControls && (
            <div className="col-span-1 md:col-span-1 flex justify-end">
              <button
                onClick={() => handleRemove(item.product.id)}
                className="flex items-center justify-center h-8 w-8 rounded-full text-gray-400 hover:text-mela-pink-500 hover:bg-mela-pink-50 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
        </div>
      ))}
      
      {/* Total */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <span className="text-lg font-medium text-mela-brown-700">মোট</span>
        <span className="text-xl font-bold text-mela-pink-500">৳{totalPrice}</span>
      </div>
    </motion.div>
  );
};

export default CartItems; 