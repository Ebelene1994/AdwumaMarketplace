import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752036498/e6nokso1yalyipfwn6ag.jpg"
                alt="AdwumaMarket Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="ml-3 text-xl font-bold">AdwumaMarket</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting Ghana's farmers directly to consumers, building a sustainable agricultural ecosystem for fresh, organic produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Farmers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join as Farmer</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-400">East Legon, Accra</p>
                  <p className="text-gray-400">Ghana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-400">+233 20 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-400">info@adwumamarket.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Secure Payment:</span>
              <div className="flex items-center space-x-4">
                {/* MTN MoMo */}
                <div className="bg-yellow-500 px-3 py-1 rounded text-black text-xs font-bold">
                  MTN MoMo
                </div>
                {/* Paystack */}
                <div className="bg-blue-600 px-3 py-1 rounded text-white text-xs font-bold">
                  Paystack
                </div>
                {/* Visa */}
                <div className="bg-blue-800 px-3 py-1 rounded text-white text-xs font-bold">
                  VISA
                </div>
                {/* Mastercard */}
                <div className="bg-red-600 px-3 py-1 rounded text-white text-xs font-bold">
                  Mastercard
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 AdwumaMarket. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;