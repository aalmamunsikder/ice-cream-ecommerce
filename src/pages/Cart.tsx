import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-mela-pink-300 mb-4 flex justify-center">
            <ShoppingBag size={80} />
          </div>
          <h2 className="text-2xl font-bold text-mela-brown-700 mb-4">আপনার কার্ট খালি</h2>
          <p className="text-gray-600 mb-6">আপনি এখনো কোন পণ্য কার্টে যোগ করেননি।</p>
          <Link 
            to="/products" 
            className="btn-primary inline-flex items-center gap-2"
          >
            পণ্য দেখুন <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 pb-16">
      <div className="bg-mela-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
            আপনার <span className="text-mela-pink-500">কার্ট</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            আপনার কার্টে থাকা পণ্যসমূহ এখানে দেখানো হয়েছে।
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-mela-brown-700">কার্টের পণ্য ({items.length})</h2>
              </div>
              
              <ul className="divide-y">
                {items.map((item) => (
                  <motion.li 
                    key={item.product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 flex items-center flex-wrap md:flex-nowrap"
                  >
                    <div className="w-20 h-20 mr-4">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-bold text-mela-brown-700">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">{item.product.nameEn}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <div className="flex items-center border rounded-full overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-lg font-bold text-mela-brown-700">
                        ৳ {item.product.price * item.quantity}
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <div className="p-4 flex justify-between">
                <button 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <Trash2 size={18} /> কার্ট খালি করুন
                </button>
                
                <Link 
                  to="/products" 
                  className="text-mela-pink-500 hover:text-mela-pink-600 transition-colors flex items-center gap-2"
                >
                  আরও পণ্য দেখুন <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-mela-brown-700">অর্ডার সারাংশ</h2>
              </div>
              
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">উপ-মোট:</span>
                  <span className="font-bold">৳ {totalPrice}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">ডেলিভারি চার্জ:</span>
                  <span className="font-bold">৳ 60</span>
                </div>
                
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-mela-brown-700 font-bold">মোট:</span>
                  <span className="font-bold text-lg text-mela-brown-700">৳ {totalPrice + 60}</span>
                </div>
                
                <button className="w-full bg-mela-pink-500 hover:bg-mela-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors mt-4">
                  চেকআউট
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  চেকআউট বাটনে ক্লিক করার মাধ্যমে, আপনি আমাদের <span className="text-mela-pink-500">শর্তাবলী</span> এবং <span className="text-mela-pink-500">গোপনীয়তা নীতি</span> মেনে নিচ্ছেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;