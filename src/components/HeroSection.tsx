import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Users } from 'lucide-react';
import { HeroSlide } from '../types';
import AnimatedCounter from './AnimatedCounter';

interface HeroSectionProps {
  onShopNow: () => void;
  onJoinFarmers: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow, onJoinFarmers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Organic Goodness.',
      subtitle: 'Experience the taste of fresh, organic produce delivered straight from the farm to your doorstep.',
      stats: {
        farmers: '500+',
        organic: '100%',
        delivery: '24/7'
      }
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1616471/pexels-photo-1616471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Fresh from Farm.',
      subtitle: 'Connect directly with local farmers and enjoy the freshest produce at unbeatable prices.',
      stats: {
        farmers: '750+',
        organic: '100%',
        delivery: '24/7'
      }
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Support Local.',
      subtitle: 'Every purchase supports local farmers and sustainable farming practices in Ghana.',
      stats: {
        farmers: '1000+',
        organic: '100%',
        delivery: '24/7'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {currentSlideData.title}
              <span className="block text-yellow-400">Delivered Fresh.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed">
              {currentSlideData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button
                onClick={onShopNow}
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                Shop Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onJoinFarmers}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Users className="mr-3 w-5 h-5" />
                Join as a Farmer
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-3">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-lg sm:text-xl text-gray-300">Local Farmers</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-3">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-lg sm:text-xl text-gray-300">Organic</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-400 mb-3">24/7</div>
                <div className="text-lg sm:text-xl text-gray-300">Fresh Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;