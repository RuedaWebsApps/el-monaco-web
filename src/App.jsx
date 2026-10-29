import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Barril from './components/Barril';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DishModal from './components/DishModal';
import CartDrawer from './components/CartDrawer';
import FireCanvas from './components/FireCanvas';
import { waLink } from './data/menuData';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [dish, setDish] = useState(null);

  const add = (d) =>
    setCart((c) =>
      c.some((i) => i.id === d.id)
        ? c.map((i) => (i.id === d.id ? { ...i, qty: i.qty + 1 } : i))
        : [...c, { ...d, qty: 1 }],
    );
  const qty = (id, n) =>
    setCart((c) => (n <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty: n } : i))));
  const count = cart.reduce((a, i) => a + i.qty, 0);

  return (
    <>
      {/* Animación de llamas y brasas fija que acompaña todo el scroll */}
      <FireCanvas fixed intensity={1.1} />

      <Navbar count={count} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Menu cart={cart} onAdd={add} onOpen={setDish} />
        <Barril />
        <Contact />
      </main>
      <Footer />

      <DishModal dish={dish} added={cart.some((i) => i.id === dish?.id)} onClose={() => setDish(null)} onAdd={add} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onQty={qty} onClear={() => setCart([])} />

      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 bg-bone px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink shadow-xl transition-colors hover:bg-ember hover:text-white"
      >
        WhatsApp
      </a>
    </>
  );
}
