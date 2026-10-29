import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveMenu from './components/InteractiveMenu';
import TechniqueSection from './components/TechniqueSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import ItemDetailModal from './components/ItemDetailModal';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { businessInfo } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0a0a] text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Interactive Menu Section */}
        <InteractiveMenu
          onAddToCart={handleAddToCart}
          onItemSelect={(item) => setSelectedItem(item)}
          cartItems={cartItems}
        />

        {/* Technique / Craftsmanship Section */}
        <TechniqueSection />

        {/* Real Food Gallery */}
        <GallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact & Orders Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onClear={handleClearCart}
      />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
        inCart={cartItems.some((i) => i.id === selectedItem?.id)}
      />

      {/* Floating Action Buttons (Sticky Right Bottom) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Cart Button (shows if items > 0) */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-2xl shadow-red-950/80 border border-red-400/40 transition-transform hover:scale-105 cursor-pointer animate-bounce"
            title="Ver pedido actual"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-bold font-mono">
              {totalCartCount} {totalCartCount === 1 ? 'plato' : 'platos'}
            </span>
          </button>
        )}

        {/* Floating WhatsApp Action */}
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-2xl shadow-green-950/70 border border-green-400/40 transition-transform hover:scale-110 cursor-pointer group"
          title="Escribir a WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            WhatsApp El Mónaco
          </span>
        </a>
      </div>
    </div>
  );
}
