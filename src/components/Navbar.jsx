import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { business } from '../data/menuData';

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
        <a href="#inicio" className="flex items-center gap-4 leading-none" aria-label="El Mónaco, inicio">
          <img src="/logo.png" alt="El Mónaco Ahumados al Barril" className="h-14 w-14 rounded-full" />
          <span className="hidden sm:block">
            <span className="display block text-2xl tracking-wide">El Mónaco</span>
            <span className="eyebrow mt-1 block !text-[0.58rem]">Ahumados al Barril</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-[0.72rem] uppercase tracking-[0.22em] text-ash transition-colors hover:text-bone">
              {t}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={business.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid !py-2 !px-3.5 sm:!py-2.5 sm:!px-5 text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.16em] font-bold !bg-ember !text-bone shadow-[0_0_15px_rgba(235,94,40,0.35)]"
          >
            ORDER ONLINE
          </a>

          <button onClick={onCart} className="hidden sm:block text-[0.72rem] uppercase tracking-[0.22em] text-bone cursor-pointer">
            Mi pedido{count > 0 && <span className="ml-2 text-ember">({count})</span>}
          </button>

          <button className="md:hidden cursor-pointer p-1 text-bone" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fade flex flex-col gap-6 border-t hairline px-6 py-8 md:hidden bg-ink/98">
          <a
            href={business.orderOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-solid w-full text-center py-3.5 text-sm font-bold tracking-widest !bg-ember !text-bone shadow-[0_0_20px_rgba(235,94,40,0.4)]"
          >
            ORDER ONLINE
          </a>
          <button
            onClick={() => { setOpen(false); onCart(); }}
            className="text-left display text-2xl text-bone flex items-center justify-between border-b hairline pb-3"
          >
            <span>Mi pedido</span>
            {count > 0 && <span className="text-ember text-xl">({count})</span>}
          </button>
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
