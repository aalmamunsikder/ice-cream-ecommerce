import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-mela-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
            আমাদের <span className="text-mela-pink-500">সম্পর্কে</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            আইসক্রিম মেলা হচ্ছে বাংলাদেশের সবচেয়ে জনপ্রিয় প্রিমিয়াম আইসক্রিম ব্র্যান্ড।
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-mela-brown-700 mb-6">
              আমাদের <span className="text-mela-pink-500">গল্প</span>
            </h2>
            <p className="text-gray-600 mb-4">
              আইসক্রিম মেলা ২০১০ সালে শুরু হয়েছিল ঢাকার একটি ছোট দোকান থেকে। আমরা বাংলাদেশের মধ্যে সর্বপ্রথম প্রিমিয়াম আইসক্রিম তৈরি শুরু করি, যা দেশী-বিদেশী উপাদান দিয়ে তৈরি।
            </p>
            <p className="text-gray-600 mb-4">
              আমরা সর্বদা গুণগত মান বজায় রাখার চেষ্টা করি এবং আমাদের গ্রাহকদের সন্তুষ্টি আমাদের মূল লক্ষ্য। আমরা বিশ্বাস করি যে প্রতিটি আইসক্রিম একটি অভিজ্ঞতা হওয়া উচিত।
            </p>
            <p className="text-gray-600 mb-6">
              আজ, আমরা বাংলাদেশের বিভিন্ন শহরে আমাদের শাখা সম্প্রসারিত করেছি এবং আমাদের লক্ষ্য হচ্ছে সারা দেশে সবার কাছে আমাদের আইসক্রিম পৌঁছে দেওয়া।
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-mela-pink-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-mela-brown-700">১২+</h3>
                <p className="text-mela-pink-500">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="bg-mela-pink-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-mela-brown-700">৫+</h3>
                <p className="text-mela-pink-500">শাখা</p>
              </div>
              <div className="bg-mela-pink-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-mela-brown-700">১০০+</h3>
                <p className="text-mela-pink-500">কর্মচারী</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="আইসক্রিম তৈরির প্রক্রিয়া" 
              className="rounded-xl shadow-xl w-full"
            />
          </motion.div>
        </div>
        
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-mela-brown-700 mb-4">
              আমাদের <span className="text-mela-pink-500">মূল্যবোধ</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমরা যে মূল্যবোধের উপর ভিত্তি করে আমাদের ব্যবসা পরিচালনা করি
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-2">গুণগত মান</h3>
              <p className="text-gray-600 text-center">
                আমরা সর্বোচ্চ গুণগত মান বজায় রাখি এবং শুধুমাত্র সেরা উপাদান ব্যবহার করি।
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-2">গ্রাহক সন্তুষ্টি</h3>
              <p className="text-gray-600 text-center">
                আমাদের গ্রাহকদের সন্তুষ্টি আমাদের প্রধান অগ্রাধিকার এবং আমরা সর্বদা তাদের প্রত্যাশা পূরণ করার চেষ্টা করি।
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-16 h-16 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-2">উদ্ভাবন</h3>
              <p className="text-gray-600 text-center">
                আমরা সর্বদা নতুন স্বাদ এবং উদ্ভাবনী আইসক্রিম তৈরির চেষ্টা করি।
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;