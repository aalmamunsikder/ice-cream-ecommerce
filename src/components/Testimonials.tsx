import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'তানভীর আহমেদ',
    text: 'আইসক্রিম মেলার চকোলেট ফাজ আইসক্রিম আমার প্রিয়। এটি সত্যিই অসাধারণ এবং আমি সবাইকে এটি ট্রাই করার পরামর্শ দিচ্ছি।',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'নিয়মিত গ্রাহক'
  },
  {
    id: 2,
    name: 'সাদিয়া খান',
    text: 'আমি নিয়মিত আইসক্রিম মেলা থেকে আইসক্রিম কিনি। তাদের স্ট্রবেরি আইসক্রিম অবিশ্বাস্য স্বাদের।',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'ফুড ব্লগার'
  },
  {
    id: 3,
    name: 'রাফি হাসান',
    text: 'পরিবারের সাথে ঢাকা বেড়াতে এসে আইসক্রিম মেলা খুঁজে পেয়ে খুবই খুশি হয়েছি। স্বাদ অসাধারণ।',
    rating: 4,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    position: 'পর্যটক'
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mela-pink-50 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block bg-mela-pink-50 text-mela-pink-500 px-4 py-1.5 rounded-full font-medium text-sm mb-3">
            গ্রাহকদের অভিজ্ঞতা
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mela-brown-700">
            গ্রাহকদের <span className="text-mela-pink-500 relative">
              মতামত
              <span className="absolute bottom-1 left-0 w-full h-2 bg-mela-pink-200 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 mt-3">
            আমাদের সন্তুষ্ট গ্রাহকদের কিছু মতামত দেখুন
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => {
            const yValues = [y1, y2, y3];
            return (
              <motion.div 
                key={testimonial.id}
                style={{ y: yValues[index % 3] }}
                whileHover={{ 
                  y: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-lg relative z-10 border border-white/50"
              >
                <div className="absolute -top-3 -left-3 text-mela-pink-400 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-mela-pink-100">
                  <Quote size={20} />
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-mela-pink-500 rounded-full p-0.5 border-2 border-white">
                          <Star size={10} className="text-white fill-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-mela-brown-700">{testimonial.name}</h4>
                        <p className="text-mela-pink-500 text-sm">{testimonial.position}</p>
                      </div>
                      
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-mela-pink-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-mela-pink-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;