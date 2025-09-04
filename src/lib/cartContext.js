"use client";

import { createContext, useContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Provider component to wrap your app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      // If item already exists, increase quantity
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove one quantity of an item
  const removeFromCart = (id) => {
    setCart((prev) => {
      return prev
        .map((p) =>
          p.id === id ? { ...p, quantity: (p.quantity || 1) - 1 } : p
        )
        .filter((p) => p.quantity > 0);
    });
  };

  // Remove item completely
  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart anywhere
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
