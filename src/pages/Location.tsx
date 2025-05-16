import React from 'react';
import LocationGrid from '../components/LocationGrid';

const Location: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-mela-pink-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mela-brown-700 mb-4">
            আমাদের <span className="text-mela-pink-500">অবস্থান সমূহ</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            বাংলাদেশের বিভিন্ন জায়গায় আমাদের আইসক্রিম মেলার শাখা রয়েছে। আপনার নিকটবর্তী শাখা খুঁজুন।
          </p>
        </div>
      </div>
      
      <LocationGrid />
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-mela-brown-700 mb-4">
            আমাদের সাথে <span className="text-mela-pink-500">যোগাযোগ করুন</span>
          </h2>
          <p className="text-gray-600 mb-6">
            যেকোনো তথ্য বা প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              placeholder="আপনার নাম" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="আপনার ইমেইল" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mela-pink-500 focus:border-transparent"
            />
            <button className="btn-primary">
              পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;