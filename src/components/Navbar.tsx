import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const { items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "হোম" },
    { to: "/products", label: "পণ্য সমূহ" },
    { to: "/about", label: "আমাদের সম্পর্কে" },
    { to: "/location", label: "অবস্থান" },
    { to: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="inline-flex flex-col relative">
                <span className="text-mela-pink-500">আইসক্রিম</span>
                <span className="h-2 bg-mela-pink-200 w-full absolute -bottom-1 transform -rotate-1"></span>
              </span>
              <span className="text-mela-brown-700">মেলা</span>
            </h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  text-base font-medium transition-colors duration-200
                  ${isActive ? "text-mela-pink-500" : "text-mela-brown-700 hover:text-mela-pink-400"}
                `}
              >
                {link.label}
              </NavLink>
            ))}
            
            <Link to="/cart" className="relative">
              <ShoppingBag
                size={24}
                className="text-mela-brown-700 hover:text-mela-pink-500 transition-colors duration-200"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-mela-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative mr-2">
              <ShoppingBag
                size={22}
                className="text-mela-brown-700 hover:text-mela-pink-500 transition-colors duration-200"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-mela-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mela-brown-700 hover:text-mela-pink-500 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-3"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `
                      text-lg font-medium py-2 px-1 transition-colors duration-200
                      ${isActive ? "text-mela-pink-500" : "text-mela-brown-700 hover:text-mela-pink-400"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;