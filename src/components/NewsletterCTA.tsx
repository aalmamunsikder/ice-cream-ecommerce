import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would normally connect to a backend service
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute h-full w-full" 
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="smallGrid" 
              width="20" 
              height="20" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 20 0 L 0 0 0 20" 
                fill="none" 
                stroke="rgba(236, 72, 153, 0.05)" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
        
        <div className="absolute -right-48 top-1/3 w-96 h-96 bg-mela-pink-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        <div className="absolute -left-48 bottom-0 w-96 h-96 bg-mela-pink-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto backdrop-blur-sm bg-white/70 rounded-3xl overflow-hidden shadow-2xl border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="text-sm font-semibold inline-block text-mela-pink-500 bg-mela-pink-100 px-3 py-1 rounded-full mb-4">
                আপডেট থাকুন
              </div>
              <h2 className="text-3xl font-bold text-mela-brown-700 mb-4">
                আমাদের নিউজলেটারে <br className="hidden md:block" />
                <span className="text-mela-pink-500 relative">
                  সাবস্ক্রাইব করুন
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
                </span>
              </h2>
              <p className="text-mela-brown-600 mb-8">
                নতুন স্বাদ, অফার এবং স্পেশাল ডিসকাউন্ট সম্পর্কে সর্বপ্রথম জানতে আমাদের নিউজলেটারে যোগ দিন।
              </p>
              
              <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="email" 
                  placeholder="আপনার ইমেইল লিখুন" 
                  className="w-full pl-5 pr-14 py-4 rounded-full text-mela-brown-600 focus:outline-none focus:ring-2 focus:ring-mela-pink-400 bg-white shadow-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bg-gradient-to-r from-mela-pink-400 to-mela-pink-500 hover:from-mela-pink-500 hover:to-mela-pink-600 text-white p-3 rounded-full transition-colors shadow-md"
                  aria-label="Subscribe"
                >
                  {isSubmitted ? <CheckCircle2 size={20} /> : <Send size={20} />}
                </button>
              </form>
              
              <p className="text-xs text-mela-brown-500 mt-3">
                * আমরা আপনার ব্যক্তিগত তথ্য কখনও শেয়ার করব না।
              </p>
            </div>
            
            <div className="hidden md:block bg-mela-pink-400 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="আইসক্রিম" 
                className="w-full h-full object-cover scale-125 origin-center"
                loading="lazy"
                width="600"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mela-pink-500/50 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA; 