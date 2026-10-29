import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['Menú', '#menu'],
  ['El Barril', '#barril'],
  ['Contacto', '#contacto'],
];

export default function Navbar({ count, onCart }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid || open ? 'bg-ink/95 backdrop-blur border-b hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="leading-none">
          <span className="display block text-2xl tracking-wide">El Mónaco</span>
          <span className="eyebrow mt-1 block !text-[0.58rem]">Ahumados al Barril</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-[0.72rem] uppercase tracking-[0.22em] text-ash transition-colors hover:text-bone">
              {t}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button onClick={onCart} className="text-[0.72rem] uppercase tracking-[0.22em] text-bone cursor-pointer">
            Mi pedido{count > 0 && <span className="ml-2 text-ember">({count})</span>}
          </button>
          <button className="md:hidden cursor-pointer" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fade flex flex-col gap-6 border-t hairline px-6 py-8 md:hidden">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="display text-3xl">
              {t}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
