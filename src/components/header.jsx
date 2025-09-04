'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categories = [
    {
      name: "Men's Wear",
      items: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Suits", "Accessories"]
    },
    {
      name: "Women's Wear", 
      items: ["Dresses", "Tops", "Jeans", "Skirts", "Jackets", "Accessories"]
    },
    {
      name: "Kids Collection",
      items: ["Boys Wear", "Girls Wear", "Baby Clothes", "School Uniforms", "Party Wear"]
    },
    {
      name: "Accessories",
      items: ["Bags", "Shoes", "Belts", "Watches", "Jewelry", "Sunglasses"]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-8900</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span>Follow us:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-yellow-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StyleCraft
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands..."
                  className="w-full px-6 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Search - Mobile */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-6 h-6 text-gray-600" />
              </button>

              {/* Wishlist */}
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
                <Heart className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Cart */}
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
                <ShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {/* User Account */}
              <button className="hidden sm:flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-full transition-colors group">
                <User className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
                <span className="text-gray-700 group-hover:text-purple-600">Account</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-6 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-8 py-4">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </a>
            
            {categories.map((category, index) => (
              <div key={index} className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{category.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 bg-white shadow-xl rounded-lg border border-gray-100 min-w-48 z-50"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {category.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Sale
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="space-y-4">
                <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
                  Home
                </a>
                
                {categories.map((category, index) => (
                  <div key={index}>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-purple-600 font-medium py-2"
                    >
                      <span>{category.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === index && (
                      <div className="ml-4 mt-2 space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href="#"
                            className="block text-gray-600 hover:text-purple-600 py-1 text-sm"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
                  Sale
                </a>
                <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
                  Contact
                </a>
                
                {/* Mobile Account Link */}
                <div className="pt-4 border-t border-gray-200">
                  <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 py-2">
                    <User className="w-5 h-5" />
                    <span>My Account</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;