import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Our Story section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="আমাদের"
              highlightedText="গল্প"
              centered={false}
            />
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              আইসক্রিম মেলা ২০১০ সালে শুরু হয়েছিল ঢাকার একটি ছোট দোকান থেকে। আমরা বাংলাদেশের মধ্যে সর্বপ্রথম প্রিমিয়াম আইসক্রিম তৈরি শুরু করি, যা দেশী-বিদেশী উপাদান দিয়ে তৈরি।
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              আমরা সর্বদা গুণগত মান বজায় রাখার চেষ্টা করি এবং আমাদের গ্রাহকদের সন্তুষ্টি আমাদের মূল লক্ষ্য। আমরা বিশ্বাস করি যে প্রতিটি আইসক্রিম একটি অভিজ্ঞতা হওয়া উচিত।
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              আজ, আমরা বাংলাদেশের বিভিন্ন শহরে আমাদের শাখা সম্প্রসারিত করেছি এবং আমাদের লক্ষ্য হচ্ছে সারা দেশে সবার কাছে আমাদের আইসক্রিম পৌঁছে দেওয়া।
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-mela-pink-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-mela-brown-700 mb-2">১২+</h3>
                <p className="text-mela-pink-500 font-medium">বছরের অভিজ্ঞতা</p>
              </div>
              <div className="bg-mela-pink-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-mela-brown-700 mb-2">৫+</h3>
                <p className="text-mela-pink-500 font-medium">শাখা</p>
              </div>
              <div className="bg-mela-pink-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-mela-brown-700 mb-2">১০০+</h3>
                <p className="text-mela-pink-500 font-medium">কর্মচারী</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-mela-pink-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mela-pink-100 rounded-full opacity-50 blur-xl"></div>
            <img 
              src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="আইসক্রিম তৈরির প্রক্রিয়া" 
              className="rounded-2xl shadow-xl w-full relative z-10"
              loading="eager"
            />
          </motion.div>
        </div>
        
        {/* Our Values section */}
        <div className="py-20">
          <SectionHeading 
            title="আমাদের"
            highlightedText="মূল্যবোধ"
            description="আমরা যে মূল্যবোধের উপর ভিত্তি করে আমাদের ব্যবসা পরিচালনা করি"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-md backdrop-blur-sm border border-white/50"
            >
              <div className="w-20 h-20 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-4">গুণগত মান</h3>
              <p className="text-mela-brown-600 text-center">
                আমরা সর্বোচ্চ গুণগত মান বজায় রাখি এবং শুধুমাত্র সেরা উপাদান ব্যবহার করি।
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-md backdrop-blur-sm border border-white/50"
            >
              <div className="w-20 h-20 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-4">গ্রাহক সন্তুষ্টি</h3>
              <p className="text-mela-brown-600 text-center">
                আমাদের গ্রাহকদের সন্তুষ্টি আমাদের প্রধান অগ্রাধিকার এবং আমরা সর্বদা তাদের প্রত্যাশা পূরণ করার চেষ্টা করি।
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-md backdrop-blur-sm border border-white/50"
            >
              <div className="w-20 h-20 bg-mela-pink-100 text-mela-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mela-brown-700 text-center mb-4">উদ্ভাবন</h3>
              <p className="text-mela-brown-600 text-center">
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