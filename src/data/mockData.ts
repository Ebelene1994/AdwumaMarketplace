import { Product, Farmer } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: 8.50,
    originalPrice: 12.00,
    category: 'Vegetables',
    description: 'Fresh organic tomatoes grown without pesticides',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '1',
    farmerName: 'Kwame Asante',
    unit: 'per kg',
    inStock: true,
    organic: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: '2',
    name: 'Fresh Spinach',
    price: 6.00,
    originalPrice: 8.00,
    category: 'Vegetables',
    description: 'Crisp and fresh spinach leaves',
    image: 'https://images.pexels.com/photos/8852027/pexels-photo-8852027.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '2',
    farmerName: 'Ama Osei',
    unit: 'per bunch',
    inStock: true,
    organic: true,
    rating: 4.6,
    reviews: 18
  },
  {
    id: '3',
    name: 'Ripe Bananas',
    price: 4.50,
    originalPrice: 6.00,
    category: 'Fruits',
    description: 'Sweet and ripe bananas',
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '3',
    farmerName: 'Kofi Mensah',
    unit: 'per dozen',
    inStock: true,
    organic: true,
    rating: 4.7,
    reviews: 32
  },
  {
    id: '4',
    name: 'Orange Carrots',
    price: 5.50,
    originalPrice: 7.50,
    category: 'Vegetables',
    description: 'Sweet orange carrots rich in vitamins',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '1',
    farmerName: 'Kwame Asante',
    unit: 'per kg',
    inStock: true,
    organic: true,
    rating: 4.5,
    reviews: 15
  },
  {
    id: '5',
    name: 'Fresh Lettuce',
    price: 3.50,
    originalPrice: 5.00,
    category: 'Vegetables',
    description: 'Crispy lettuce perfect for salads',
    image: 'https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '4',
    farmerName: 'Akosua Boateng',
    unit: 'per head',
    inStock: true,
    organic: true,
    rating: 4.4,
    reviews: 21
  },
  {
    id: '6',
    name: 'Sweet Oranges',
    price: 7.00,
    originalPrice: 9.00,
    category: 'Fruits',
    description: 'Juicy sweet oranges packed with vitamin C',
    image: 'https://images.pexels.com/photos/20992993/pexels-photo-20992993.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '2',
    farmerName: 'Ama Osei',
    unit: 'per kg',
    inStock: true,
    organic: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: '7',
    name: 'Green Peppers',
    price: 9.50,
    originalPrice: 12.50,
    category: 'Vegetables',
    description: 'Fresh green bell peppers',
    image: 'https://images.pexels.com/photos/2893525/pexels-photo-2893525.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '3',
    farmerName: 'Kofi Mensah',
    unit: 'per kg',
    inStock: true,
    organic: true,
    rating: 4.6,
    reviews: 28
  },
  {
    id: '8',
    name: 'Fresh Pineapple',
    price: 15.00,
    originalPrice: 18.00,
    category: 'Fruits',
    description: 'Sweet and juicy pineapple',
    image: 'https://images.pexels.com/photos/32815645/pexels-photo-32815645.jpeg?auto=compress&cs=tinysrgb&w=400',
    farmerId: '4',
    farmerName: 'Akosua Boateng',
    unit: 'per piece',
    inStock: true,
    organic: true,
    rating: 4.8,
    reviews: 37
  }
];

export const mockFarmers: Farmer[] = [
  {
    id: '1',
    name: 'Kwame Asante',
    location: 'Kumasi, Ashanti Region',
    avatar: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Organic farming specialist with 15 years of experience in sustainable agriculture.',
    products: 25,
    rating: 4.8,
    verified: true,
    joinDate: '2019-03-15'
  },
  {
    id: '2',
    name: 'Ama Osei',
    location: 'Tema, Greater Accra',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specializes in leafy greens and citrus fruits using traditional farming methods.',
    products: 18,
    rating: 4.9,
    verified: true,
    joinDate: '2020-01-20'
  },
  {
    id: '3',
    name: 'Kofi Mensah',
    location: 'Cape Coast, Central Region',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Third-generation farmer focused on tropical fruits and root vegetables.',
    products: 32,
    rating: 4.7,
    verified: true,
    joinDate: '2018-11-10'
  },
  {
    id: '4',
    name: 'Akosua Boateng',
    location: 'Tamale, Northern Region',
    avatar: 'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Innovative farmer using modern techniques to grow variety of crops year-round.',
    products: 21,
    rating: 4.6,
    verified: true,
    joinDate: '2021-05-08'
  }
];

export const categories = [
  { id: 'vegetables', name: 'Vegetables', icon: '🥕', count: 45 },
  { id: 'fruits', name: 'Fruits', icon: '🍎', count: 32 },
  { id: 'grains', name: 'Grains', icon: '🌾', count: 18 },
  { id: 'herbs', name: 'Herbs', icon: '🌿', count: 12 },
  { id: 'tubers', name: 'Tubers', icon: '🥔', count: 25 },
  { id: 'legumes', name: 'Legumes', icon: '🫘', count: 15 }
];