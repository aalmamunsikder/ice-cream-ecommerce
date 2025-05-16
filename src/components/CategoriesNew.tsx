import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  description: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'classic',
    name: 'ক্লাসিক',
    nameEn: 'Classic',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'চিরকালীন জনপ্রিয় স্বাদ যা সবাইকে মুগ্ধ করে',
    count: 5
  },
  {
    id: 'fruit',
    name: 'ফলের',
    nameEn: 'Fruit',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'টাটকা ফল দিয়ে তৈরি প্রাকৃতিক স্বাদ',
    count: 8
  },
  {
    id: 'premium',
    name: 'প্রিমিয়াম',
    nameEn: 'Premium',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'বিশেষ উপাদান দিয়ে তৈরি উচ্চমানের স্বাদ',
    count: 4
  },
  {
    id: 'seasonal',
    name: 'মৌসুমী',
    nameEn: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'বিশেষ মৌসুমে পাওয়া স্বাদ',
    count: 3
  },
  {
    id: 'nutty',
    name: 'বাদামী',
    nameEn: 'Nutty',
    image: 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=600',
    description: 'বিভিন্ন বাদাম দিয়ে তৈরি করা পুষ্টিকর আইসক্রিম',
    count: 6
  },
  {
    id: 'chocolate',
    name: 'চকোলেট',
    nameEn: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'গাঢ় চকোলেট স্বাদের বিভিন্ন ধরনের আইসক্রিম',
    count: 7
  },
  {
    id: 'sugar-free',
    name: 'সুগার-ফ্রি',
    nameEn: 'Sugar-free',
    image: 'https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928043_1280.jpg',
    description: 'ডায়াবেটিস রোগীদের জন্য বিশেষভাবে তৈরি করা',
    count: 4
  },
  {
    id: 'kulfi',
    name: 'কুলফি',
    nameEn: 'Kulfi',
    image: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    description: 'ঐতিহ্যবাহী দক্ষিণ এশীয় আইসক্রিম স্পেশালিটি',
    count: 5
  }
];

const CategoriesNew: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-mela-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mela-brown-700 to-mela-brown-900">আমাদের</span>{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-mela-pink-500 to-mela-pink-700">বিভাগ</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-mela-pink-200 to-mela-pink-300 -z-10 transform -rotate-1 rounded-full opacity-80"></span>
                <span className="absolute -bottom-1 left-0 w-3/4 h-1.5 bg-gradient-to-r from-mela-pink-400 to-mela-pink-500 -z-10 transform rotate-1 rounded-full"></span>
              </span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-mela-brown-600 max-w-2xl mx-auto text-lg"
          >
            আইসক্রিমের বিভিন্ন ধরনের স্বাদ অনুসারে আমাদের বিভাগসমূহ দেখুন
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden group rounded-2xl shadow-lg h-80"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={index < 4 ? "eager" : "lazy"}
                  width="400" 
                  height="500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1629385701021-36c041d590ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mela-brown-800/80 to-transparent transition-opacity"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 transition-transform duration-300 group-hover:translate-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <span className="text-sm backdrop-blur-sm bg-mela-pink-500/80 px-2 py-1 rounded-full">
                      {category.count}টি স্বাদ
                    </span>
                  </div>
                  <p className="text-sm text-white/90 mb-3">{category.description}</p>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="inline-flex items-center text-sm text-white hover:text-mela-pink-300 font-medium group"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-mela-pink-500 to-mela-pink-400 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>সকল আইসক্রিম দেখুন</span>
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesNew; 