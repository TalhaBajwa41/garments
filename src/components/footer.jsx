'use client';
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Features Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-gray-400 text-sm">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Easy Returns</h4>
                <p className="text-gray-400 text-sm">30-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-gray-400 text-sm">100% protected</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Buy Now Pay Later</h4>
                <p className="text-gray-400 text-sm">Flexible payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                StyleCraft
              </h2>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                Crafting premium garments with passion and precision. Where style meets quality in every thread.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, color: 'hover:text-pink-400' },
                { icon: Facebook, color: 'hover:text-blue-400' },
                { icon: Twitter, color: 'hover:text-cyan-400' },
                { icon: Youtube, color: 'hover:text-red-400' }
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-gray-800 p-3 rounded-full ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Sale', 'Collections', 'Size Guide', 'About Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Categories</h3>
            <ul className="space-y-3">
              {['Men\'s Wear', 'Women\'s Wear', 'Kids Collection', 'Accessories', 'Footwear', 'Premium Line'].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">123 Fashion Street</p>
                  <p className="text-gray-400 text-sm">Style City, SC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@stylecraft.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@stylecraft.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-white">Stay In Style</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 StyleCraft. All rights reserved. | 
              <a href="#" className="hover:text-white ml-1 transition-colors">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1 transition-colors">Terms of Service</a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((payment) => (
                  <div 
                    key={payment}
                    className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;