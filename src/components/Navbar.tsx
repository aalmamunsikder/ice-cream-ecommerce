import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { text: 'হোম', path: '/' },
    { text: 'পণ্য', path: '/products' },
    { text: 'আমাদের সম্পর্কে', path: '/about' },
    { text: 'অবস্থান', path: '/location' },
    { text: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="inline-flex flex-col relative">
              <span className="text-mela-pink-500">আইসক্রিম</span>
              <span className="h-2 bg-mela-pink-200 w-full absolute -bottom-1 transform -rotate-1"></span>
            </span>
            <span className="text-mela-brown-500">মেলা</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link text-lg ${
                location.pathname === link.path 
                  ? 'text-mela-pink-500 font-bold' 
                  : 'text-mela-brown-500'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Navigation Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-mela-brown-500 hover:text-mela-pink-500 transition-colors">
            <Search size={24} />
          </button>
          <Link to="/cart" className="text-mela-brown-500 hover:text-mela-pink-500 transition-colors relative">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-mela-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/account" className="text-mela-brown-500 hover:text-mela-pink-500 transition-colors">
            <User size={24} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="text-mela-brown-500 relative">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-mela-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button 
            onClick={toggleMenu}
            className="text-mela-brown-500 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col py-4 px-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`py-2 px-4 rounded-md ${
                  location.pathname === link.path 
                    ? 'bg-mela-pink-100 text-mela-pink-500 font-bold' 
                    : 'text-mela-brown-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;