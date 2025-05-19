import React from 'react';
import { motion } from 'framer-motion';
import { Heart, LucideIcon, Globe, ThumbsUp, User, LucideProps } from 'lucide-react';

interface FeatureProps {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col items-center md:items-start text-center md:text-left p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="p-3 mb-4 bg-mela-pink-100 rounded-full">
        <Icon className="w-6 h-6 text-mela-pink-500" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-mela-brown-700">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "প্রিমিয়াম মানের",
      description: "আমরা সবসময় সেরা মানের উপাদান দিয়ে তৈরি আইসক্রিম প্রদান করি। আমাদের সমস্ত পণ্য দৈনিক তৈরি করা হয়।"
    },
    {
      icon: Globe,
      title: "বৈচিত্র্যময় স্বাদ",
      description: "আমাদের কাছে সর্বদা ৩০+ স্বাদ পাওয়া যায়। ঐতিহ্যবাহী থেকে অভিনব, আমরা সবার জন্য কিছু না কিছু রাখি।"
    },
    {
      icon: ThumbsUp,
      title: "দ্রুত ডেলিভারি",
      description: "আমরা আপনার অর্ডার সময়মতো এবং দ্রুত ডেলিভারি করতে প্রতিশ্রুতিবদ্ধ।"
    },
    {
      icon: User,
      title: "সন্তুষ্ট গ্রাহক",
      description: "গ্রাহকের সন্তুষ্টি আমাদের প্রধান অগ্রাধিকার। আমাদের ৯৮% গ্রাহক আমাদের সম্পর্কে ইতিবাচক প্রতিক্রিয়া দিয়েছেন।"
    }
  ];
  
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <motion.span
            className="text-sm font-medium inline-block px-3 py-1 bg-mela-pink-100 text-mela-pink-600 rounded-full mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            আমাদের বৈশিষ্ট্য
          </motion.span>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-mela-brown-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            আমাদের পণ্য কেন <span className="text-mela-pink-500">বিশেষ</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-xl text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            আমরা আমাদের গ্রাহকদের সন্তুষ্টি নিশ্চিত করতে সর্বোত্তম সেবা নিশ্চিত করি। আমরা যা অফার করি তা জানতে পড়তে থাকুন।
          </motion.p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1 + 0.3}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 