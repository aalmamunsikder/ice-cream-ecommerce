import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterNew: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
  ];
  
  const quickLinks = [
    { name: "হোম", path: "/" },
    { name: "পণ্য", path: "/products" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "অবস্থান", path: "/location" },
    { name: "যোগাযোগ", path: "/contact" }
  ];
  
  return (
    <footer className="relative overflow-hidden pt-16 pb-8 bg-gradient-to-b from-mela-brown-600 to-mela-brown-800">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-mela-pink-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 top-1/3 w-64 h-64 bg-mela-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Footer wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-24 text-white opacity-10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-current"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="fill-current opacity-50"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Brand Info Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-start">
              <Link to="/" className="inline-block mb-6">
                <h3 className="text-3xl font-bold">
                  <span className="inline-flex flex-col relative">
                    <span className="text-mela-pink-400">আইসক্রিম</span>
                    <span className="h-2 bg-mela-pink-200/30 w-full absolute -bottom-1 transform -rotate-1"></span>
                  </span>
                  <span className="text-white">মেলা</span>
                </h3>
              </Link>
              <p className="text-white/80 mb-6 max-w-xs">
                বাংলাদেশের সবচেয়ে জনপ্রিয় প্রিমিয়াম আইসক্রিম ব্র্যান্ড। স্বাদ যা আপনাকে ঘুরিয়ে দেবে।
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mela-pink-500 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Quick Links Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-start">
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                দ্রুত লিঙ্ক
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-mela-pink-400"></span>
              </h4>
              <ul className="space-y-3 w-full">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-white/80 hover:text-mela-pink-300 transition-colors flex items-center"
                    >
                      <ChevronRight size={16} className="mr-2 text-mela-pink-400" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info Column */}
            <motion.div variants={itemVariants} className="flex flex-col items-start">
              <h4 className="text-xl font-bold mb-6 text-white relative inline-block">
                যোগাযোগ
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-mela-pink-400"></span>
              </h4>
              <ul className="space-y-4 w-full">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-mela-pink-400" size={18} />
                  </div>
                  <div className="text-white/80">
                    <p>গুলশান-২, রোড #৪৫</p>
                    <p>ঢাকা ১২১২, বাংলাদেশ</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-mela-pink-400" size={18} />
                  </div>
                  <span>+৮৮০ ১৭১২ ৩৪৫৬৭৮</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-mela-pink-400" size={18} />
                  </div>
                  <span>info@icecreammela.com</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Copyright Section */}
        <motion.div 
          className="border-t border-white/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/70 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>&copy; ২০২৫ আইসক্রিম মেলা। সর্বস্বত্ব সংরক্ষিত।</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="flex items-center">
              তৈরি করা হয়েছে <Heart size={14} className="mx-1 text-mela-pink-400 fill-mela-pink-400" /> দিয়ে বাংলাদেশে
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterNew; 