import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Award, ThumbsUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf size={28} />,
      title: "১০০% প্রাকৃতিক উপাদান",
      description: "সমস্ত আইসক্রিম তাজা ও প্রাকৃতিক উপাদান দিয়ে তৈরি করা হয়, কোন কৃত্রিম রঙ বা স্বাদ ছাড়া",
    },
    {
      icon: <Award size={28} />,
      title: "প্রিমিয়াম মানের",
      description: "বিশেষজ্ঞদের দ্বারা তৈরি করা প্রিমিয়াম স্বাদ যা আপনার খাবারের অনুভূতিকে বাড়িয়ে তুলবে",
    },
    {
      icon: <Sparkles size={28} />,
      title: "বিশেষ রেসিপি",
      description: "প্রতিটি স্বাদ আমাদের অভিজ্ঞ শেফদের বিশেষ রেসিপি অনুসারে তৈরি করা হয়",
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "গ্রাহক সন্তুষ্টি",
      description: "আমাদের ৯৯% গ্রাহক সন্তুষ্ট এবং পুনরায় আমাদের পণ্য কিনতে আসেন",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-mela-pink-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-mela-pink-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="আমাদের বৈশিষ্ট্য"
          title="কেন আমাদের"
          highlightedText="নির্বাচন করবেন"
          description="আমাদের আইসক্রিম থেকে আপনি পাবেন সর্বোচ্চ মান, স্বাদ এবং পুষ্টিকর উপাদান"
          centered={true}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="backdrop-blur-sm bg-gradient-to-br from-white to-mela-pink-50 rounded-2xl p-8 border border-mela-pink-100 shadow-lg shadow-mela-pink-100/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 bg-gradient-to-br from-mela-pink-100/20 to-mela-pink-200/10 rounded-full blur-xl"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mela-pink-100 to-mela-pink-200 flex items-center justify-center mb-6 text-mela-pink-500 shadow-md relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-mela-brown-800 mb-3 relative z-10">{feature.title}</h3>
              <p className="text-mela-brown-600 relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 