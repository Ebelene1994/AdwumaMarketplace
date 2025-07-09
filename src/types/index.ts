export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'farmer';
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  image: string;
  farmerId: string;
  farmerName: string;
  unit: string;
  inStock: boolean;
  organic: boolean;
  rating: number;
  reviews: number;
}

export interface Farmer {
  id: string;
  name: string;
  location: string;
  avatar: string;
  bio: string;
  products: number;
  rating: number;
  verified: boolean;
  joinDate: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  stats: {
    farmers: string;
    organic: string;
    delivery: string;
  };
}