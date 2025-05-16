import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md backdrop-blur-sm border border-white/50"
          >
            <SectionHeading 
              title="যোগাযোগ"
              highlightedText="তথ্য"
              centered={false}
            />
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className="bg-mela-pink-100 p-4 rounded-full text-mela-pink-500 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-mela-brown-700 mb-2">ঠিকানা</h3>
                  <p className="text-mela-brown-600 text-lg">গুলশান-২, ঢাকা ১২১২, বাংলাদেশ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-mela-pink-100 p-4 rounded-full text-mela-pink-500 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-mela-brown-700 mb-2">ফোন</h3>
                  <p className="text-mela-brown-600 text-lg">+৮৮০ ১৭১২ ৩৪৫৬৭৮</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-mela-pink-100 p-4 rounded-full text-mela-pink-500 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-mela-brown-700 mb-2">ইমেইল</h3>
                  <p className="text-mela-brown-600 text-lg">info@icecreammela.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-mela-pink-100 p-4 rounded-full text-mela-pink-500 shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-mela-brown-700 mb-2">খোলার সময়</h3>
                  <p className="text-mela-brown-600 text-lg">প্রতিদিন সকাল ১০টা থেকে রাত ১০টা</p>
                </div>
              </div>
            </div>
            
            <div className="bg-mela-pink-50 p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-mela-brown-700 mb-6">আমাদের সোশ্যাল মিডিয়াতে ফলো করুন</h3>
              <div className="flex gap-5">
                <a href="#" className="bg-white p-4 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-4 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-white p-4 rounded-full text-mela-pink-500 hover:bg-mela-pink-500 hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="bg-white p-10 rounded-2xl shadow-md backdrop-blur-sm border border-white/50 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mela-pink-100 rounded-full opacity-30 blur-2xl"></div>
            
            <SectionHeading 
              title="আমাদের"
              highlightedText="মেসেজ পাঠান"
              centered={false}
            />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-mela-brown-700 font-medium mb-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-mela-brown-700 font-medium mb-2">আপনার ইমেইল</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-mela-brown-700 font-medium mb-2">বিষয়</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                  placeholder="মেসেজের বিষয় লিখুন"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-mela-brown-700 font-medium mb-2">মেসেজ</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent" 
                  placeholder="আপনার মেসেজ লিখুন"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-mela-pink-500 hover:bg-mela-pink-600 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
              >
                পাঠান <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;