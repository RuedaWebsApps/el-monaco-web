import { business } from '../data/menuData';

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-5">
          <img src="/logo.png" alt="El Mónaco" className="h-20 w-20 rounded-full" />
          <div>
            <p className="display text-2xl">El Mónaco</p>
            <p className="eyebrow mt-1 !text-[0.58rem]">Ahumados al Barril · {business.city}</p>
          </div>
        </div>
        <p className="text-[0.72rem] tracking-wider text-ash">
          © {new Date().getFullYear()} {business.name}
        </p>
      </div>
    </footer>
  );
}
