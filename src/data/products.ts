import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'নারকেল আইসক্রিম',
    nameEn: 'Coconut Ice Cream',
    description: 'টাটকা নারকেল থেকে তৈরি করা প্রিমিয়াম আইসক্রিম।',
    price: 150,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ক্লাসিক',
    isPopular: true,
    isNew: false,
    isSpecialOffer: false
  },
  {
    id: 2,
    name: 'চকোলেট আইসক্রিম',
    nameEn: 'Chocolate Ice Cream',
    description: 'গাঢ় চকোলেট দিয়ে তৈরি করা এই আইসক্রিম আপনার মন ভরিয়ে দেবে।',
    price: 180,
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ক্লাসিক',
    isPopular: true,
    isNew: false,
    isSpecialOffer: true
  },
  {
    id: 3,
    name: 'ভ্যানিলা আইসক্রিম',
    nameEn: 'Vanilla Ice Cream',
    description: 'আসল ভ্যানিলা বীন দিয়ে তৈরি, যার স্বাদ অতুলনীয়।',
    price: 160,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ক্লাসিক',
    isPopular: false,
    isNew: false,
    isSpecialOffer: false
  },
  {
    id: 4,
    name: 'স্ট্রবেরি আইসক্রিম',
    nameEn: 'Strawberry Ice Cream',
    description: 'টাটকা স্ট্রবেরি দিয়ে তৈরি, যা বাচ্চাদের প্রিয়।',
    price: 170,
    image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ফল',
    isPopular: true,
    isNew: false,
    isSpecialOffer: false
  },
  {
    id: 5,
    name: 'লিচু আইসক্রিম',
    nameEn: 'Lychee Ice Cream',
    description: 'বাংলাদেশের টাটকা লিচু দিয়ে তৈরি এই আইসক্রিম।',
    price: 190,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ফল',
    isPopular: false,
    isNew: true,
    isSpecialOffer: false
  },
  {
    id: 6,
    name: 'আম আইসক্রিম',
    nameEn: 'Mango Ice Cream',
    description: 'গরমের সেরা ফল আম দিয়ে তৈরি মৌসুমী আইসক্রিম।',
    price: 200,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'ফল',
    isPopular: true,
    isNew: false,
    isSpecialOffer: true
  },
  {
    id: 7,
    name: 'পিস্তা আইসক্রিম',
    nameEn: 'Pistachio Ice Cream',
    description: 'পিস্তা বাদাম দিয়ে তৈরি প্রিমিয়াম আইসক্রিম।',
    price: 220,
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'প্রিমিয়াম',
    isPopular: false,
    isNew: false,
    isSpecialOffer: false
  },
  {
    id: 8,
    name: 'বুটারস্কচ আইসক্রিম',
    nameEn: 'Butterscotch Ice Cream',
    description: 'ক্যারামেল স্বাদের এই আইসক্রিম সবার প্রিয়।',
    price: 190,
    image: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'প্রিমিয়াম',
    isPopular: false,
    isNew: true,
    isSpecialOffer: false
  },
];