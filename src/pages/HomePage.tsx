import React from 'react';
import HeroSection from '../components/HeroSection';
import LoginModal from '../components/LoginModal';
import { Star, Shield, Truck, Users, Heart, Award, Tag, Package, ShoppingCart, CreditCard, CheckCircle } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { categories } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import AnimatedCounter from '../components/AnimatedCounter';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { addToCart } = useCart();
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroSection
        onShopNow={() => onPageChange('products')}
        onJoinFarmers={() => setIsLoginModalOpen(true)}
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AdwumaMarket?</h2>
            <p className="text-lg text-gray-600">Connecting you directly with local farmers for the freshest produce</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Organic</h3>
              <p className="text-gray-600">All products are certified organic and grown without harmful pesticides</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery available across Accra and surrounding areas</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Direct from Farmers</h3>
              <p className="text-gray-600">Support local farmers and get the best prices by cutting out middlemen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover premium farm produce with exclusive bulk discounts and seasonal deals.
            </p>
            <button
              onClick={() => onPageChange('products')}
              className="mt-8 bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              View All Offers
            </button>
          </div>
        </div>
      </section>

      {/* Wholesale Prices Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Wholesale Prices</h2>
              <p className="text-2xl text-green-600 font-semibold mb-6">Bulk purchases, bulk savings</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get the best deals when you buy in bulk. Perfect for restaurants, hotels, schools, and large families. 
                The more you buy, the more you save with our tiered pricing system.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">10%</div>
                  <div className="text-sm text-gray-600">Orders above GHS 200</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">20%</div>
                  <div className="text-sm text-gray-600">Orders above GHS 500</div>
                </div>
              </div>
              <button
                onClick={() => onPageChange('products')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Start Bulk Shopping
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bulk produce"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Explore our wide variety of fresh, organic produce</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md p-6 text-center group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => onPageChange('products')}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.count} products available</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors group-hover:bg-green-700">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Fresh picks from our best farmers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                    Organic
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.farmerName}</p>
                  
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-green-600">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </div>
                  
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onPageChange('products')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Getting fresh produce delivered is simple and easy</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sign Up</h3>
              <p className="text-gray-600">Create your account and join our community of conscious consumers</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <ShoppingCart className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Browse Farm Products</h3>
              <p className="text-gray-600">Explore fresh produce from verified local farmers across Ghana</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <CreditCard className="w-10 h-10 text-orange-600" />
              </div>
              <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Make Payment</h3>
              <p className="text-gray-600">Pay securely via Mobile Money, Bank Transfer, or Cash on Delivery</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Receive Your Order</h3>
              <p className="text-gray-600">Get fresh produce delivered to your doorstep within 24 hours</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onPageChange('products')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-lg opacity-90">Be part of Ghana's agricultural revolution</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-lg opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-lg opacity-90">Partner Farmers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-lg opacity-90">Products Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <p className="text-lg opacity-90">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Owusu",
                location: "Accra",
                text: "The freshest vegetables I've ever bought! The delivery was quick and the quality is outstanding.",
                rating: 5
              },
              {
                name: "Michael Asante",
                location: "Kumasi",
                text: "Supporting local farmers has never been easier. Great platform with excellent customer service.",
                rating: 5
              },
              {
                name: "Grace Boateng",
                location: "Tema",
                text: "Love the variety and quality of products. The prices are very reasonable compared to traditional markets.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;