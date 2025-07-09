import React from 'react';
import { Users, Award, Leaf, Heart, Shield, Target } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AdwumaMarket</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connecting Ghana's farmers directly to consumers, building a sustainable agricultural ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                AdwumaMarket was founded with a simple yet powerful mission: to bridge the gap between Ghana's hardworking farmers and conscious consumers who value fresh, organic produce.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that by eliminating middlemen and creating direct connections, we can ensure farmers receive fair compensation while customers enjoy the freshest produce at competitive prices.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Built with Love</h3>
                  <p className="text-gray-600">For farmers, by farmers</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmers working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that tell our story</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-gray-600">Partner Farmers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-gray-600">Organic Products</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-gray-600">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote sustainable farming practices that protect our environment and ensure long-term agricultural success.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every product on our platform meets strict quality standards, ensuring you receive only the best organic produce.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building strong communities by connecting farmers and consumers in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind AdwumaMarket</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Nkrumah",
                role: "Founder & CEO",
                bio: "Former agricultural engineer with 15+ years in sustainable farming",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Ama Serwaa",
                role: "Head of Operations",
                bio: "Supply chain expert passionate about connecting farmers to markets",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Kofi Asante",
                role: "Technology Director",
                bio: "Software engineer building technology solutions for agriculture",
                image: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Be part of the agricultural revolution in Ghana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold">
              Become a Farmer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;