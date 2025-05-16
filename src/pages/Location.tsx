import React from 'react';
import LocationGrid from '../components/LocationGrid';

const Location: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
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