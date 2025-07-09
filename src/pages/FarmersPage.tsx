import React, { useState } from 'react';
import { MapPin, Star, Award, Calendar, Search, Filter } from 'lucide-react';
import { mockFarmers } from '../data/mockData';
import { Farmer } from '../types';

const FarmersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredFarmers = mockFarmers
    .filter(farmer => 
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'products':
          return b.products - a.products;
        case 'newest':
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const displayedFarmers = showAll ? filteredFarmers : filteredFarmers.slice(0, 6);

  const FarmerCard: React.FC<{ farmer: Farmer }> = ({ farmer }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={farmer.avatar}
          alt={farmer.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {farmer.verified && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
            <Award className="w-4 h-4 mr-1" />
            Verified
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{farmer.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{farmer.location}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">{farmer.rating} rating</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{farmer.products} products</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{farmer.bio}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Joined {new Date(farmer.joinDate).getFullYear()}</span>
          </div>
          
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            View Products
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Farmers</h1>
          <p className="text-gray-600">Meet the dedicated farmers bringing you fresh, organic produce</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search farmers by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="name">Sort by Name</option>
              <option value="rating">Highest Rated</option>
              <option value="products">Most Products</option>
              <option value="newest">Newest Members</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">Total Farmers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Regions Covered</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-600">Organic Certified</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedFarmers.map(farmer => (
            <FarmerCard key={farmer.id} farmer={farmer} />
          ))}
        </div>

        {displayedFarmers.length === 0 && filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No farmers found matching your search.</p>
          </div>
        )}

        {/* View More Button */}
        {!showAll && filteredFarmers.length > 6 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              View More Farmers ({filteredFarmers.length - 6} more)
            </button>
          </div>
        )}

        {/* Results Info */}
        {filteredFarmers.length > 0 && (
          <div className="text-center text-gray-600 mb-8">
            {showAll 
              ? `Showing all ${filteredFarmers.length} farmers`
              : `Showing ${Math.min(6, filteredFarmers.length)} of ${filteredFarmers.length} farmers`
            }
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 mt-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Farming Community</h2>
          <p className="text-lg mb-6">Become a partner farmer and reach thousands of customers</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Apply to Become a Farmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmersPage;