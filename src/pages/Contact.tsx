import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-mela-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
            আমাদের সাথে <span className="text-mela-pink-500">যোগাযোগ করুন</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            আপনার যেকোনো প্রশ্ন বা মতামতের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে সাহায্য করতে সর্বদা প্রস্তুত।
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-mela-brown-700 mb-6">
              যোগাযোগ <span className="text-mela-pink-500">তথ্য</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-mela-pink-100 p-3 rounded-full text-mela-pink-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-mela-brown-700">ঠিকানা</h3>
                  <p className="text-gray-600">গুলশান-২, ঢাকা ১২১২, বাংলাদেশ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mela-pink-100 p-3 rounded-full text-mela-pink-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-mela-brown-700">ফোন</h3>
                  <p className="text-gray-600">+৮৮০ ১৭১২ ৩৪৫৬৭৮</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mela-pink-100 p-3 rounded-full text-mela-pink-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-mela-brown-700">ইমেইল</h3>
                  <p className="text-gray-600">info@icecreammela.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mela-pink-100 p-3 rounded-full text-mela-pink-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-mela-brown-700">খোলার সময়</h3>
                  <p className="text-gray-600">প্রতিদিন সকাল ১০টা থেকে রাত ১০টা</p>
                </div>
              </div>
            </div>
            
            <div className="bg-mela-pink-50 p-6 rounded-xl">
              <h3 className="font-bold text-mela-brown-700 mb-4">আমাদের সোশ্যাল মিডিয়াতে ফলো করুন</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-mela-brown-700 mb-6">
              আমাদের <span className="text-mela-pink-500">মেসেজ পাঠান</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">আপনার ইমেইল</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">বিষয়</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                  placeholder="মেসেজের বিষয় লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">মেসেজ</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                  placeholder="আপনার মেসেজ লিখুন"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-mela-pink-500 hover:bg-mela-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                পাঠান <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;