export interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  openingHours: string;
  image: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: 'আইসক্রিম মেলা গুলশান',
    address: 'রোড নং ২৭, বাড়ি নং ৩৫, গুলশান-১',
    city: 'ঢাকা',
    phone: '+৮৮০ ১৭১২ ৩৪৫৬৭৮',
    openingHours: 'প্রতিদিন সকাল ১০টা থেকে রাত ১০টা',
    image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'আইসক্রিম মেলা ধানমন্ডি',
    address: 'রোড নং ২, বাড়ি নং ১৫, ধানমন্ডি',
    city: 'ঢাকা',
    phone: '+৮৮০ ১৭১৩ ৩৪৫৬৭৯',
    openingHours: 'প্রতিদিন সকাল ১০টা থেকে রাত ১০টা',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'আইসক্রিম মেলা উত্তরা',
    address: 'সেক্টর ৪, রোড নং ১২, বাড়ি নং ২৩, উত্তরা',
    city: 'ঢাকা',
    phone: '+৮৮০ ১৭১৪ ৩৪৫৬৮০',
    openingHours: 'প্রতিদিন সকাল ১০টা থেকে রাত ১০টা',
    image: 'https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'আইসক্রিম মেলা চট্টগ্রাম',
    address: 'নাসিরাবাদ, পি.এ. ভবন, জিইসি মোড়',
    city: 'চট্টগ্রাম',
    phone: '+৮৮০ ১৮১২ ৩৪৫৬৮১',
    openingHours: 'প্রতিদিন সকাল ১০টা থেকে রাত ১০টা',
    image: 'https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];