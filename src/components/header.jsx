'use client';
// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../lib/cartContext'; // Assuming you have cart context from previous guidance

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // Get cart items count

  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with unique animation */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 animate-pulse">
            <Image
              src="/logo.png" // Replace with your logo path (e.g., a garment icon or custom logo)
              alt="Garments Store Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <span className="text-xl font-bold tracking-wide">Elegant Threads</span> {/* Unique brand name */}
        </Link>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/products?category=men" className="hover:text-indigo-200 transition-colors">Men</Link>
          <Link href="/products?category=women" className="hover:text-indigo-200 transition-colors">Women</Link>
          <Link href="/products?category=kids" className="hover:text-indigo-200 transition-colors">Kids</Link>
          <Link href="/products?category=sale" className="hover:text-indigo-200 transition-colors">Sale</Link>
        </nav>

        {/* Search Bar with unique placeholder */}
        <div className="hidden md:flex flex-1 max-w-xs mx-4">
          <input
            type="text"
            placeholder="Search for stylish outfits..."
            className="w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Icons: Cart and User */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 animate-bounce">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link href="/profile">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Unique slide-in animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-3 animate-slide-down">
          <nav className="flex flex-col space-y-2">
            <Link href="/products?category=men" className="hover:text-indigo-200">Men</Link>
            <Link href="/products?category=women" className="hover:text-indigo-200">Women</Link>
            <Link href="/products?category=kids" className="hover:text-indigo-200">Kids</Link>
            <Link href="/products?category=sale" className="hover:text-indigo-200">Sale</Link>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Search for stylish outfits..."
                className="w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}