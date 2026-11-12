import { business } from '../data/menuData';

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-5">
          <img src="/logo.png" alt="El Mónaco" className="h-20 w-20 rounded-full" />
          <div>
            <p className="display text-2xl">El Mónaco</p>
            <p className="eyebrow mt-1 !text-[0.58rem]">Ahumados al Barril · {business.address}</p>
            <p className="mt-1 text-[0.7rem] tracking-wider text-ash">
              {business.founder} · {business.founderRole}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <a
            href={business.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[0.72rem] tracking-wider text-bone/80 transition-colors hover:text-ember"
          >
            {business.website}
          </a>
          <p className="text-[0.72rem] tracking-wider text-ash">
            © {new Date().getFullYear()} {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
