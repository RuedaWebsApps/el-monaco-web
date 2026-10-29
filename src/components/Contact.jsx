import { useState } from 'react';
import { business, waLink } from '../data/menuData';

const rows = [
  ['Teléfono', business.phone, `tel:${business.phoneRaw}`],
  ['WhatsApp', business.phone, waLink()],
  ['Correo', business.email, `mailto:${business.email}`],
  ['Ubicación', business.city, null],
];

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', date: '', people: '', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const t =
      `Hola El Mónaco, les escribo desde la página web.\n\nNombre: ${f.name}\nTeléfono: ${f.phone}` +
      `${f.date ? `\nFecha: ${f.date}` : ''}${f.people ? `\nPersonas: ${f.people}` : ''}` +
      `${f.msg ? `\n\n${f.msg}` : ''}`;
    window.open(waLink(t), '_blank');
  };

  return (
    <section id="contacto" className="scroll-mt-16 border-t hairline bg-coal py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contacto</p>
          <h2 className="display mt-5 text-5xl leading-[1.05] sm:text-6xl">
            Haz tu
            <br />
            <em>pedido.</em>
          </h2>

          <dl className="mt-14 border-t hairline">
            {rows.map(([k, v, href]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 border-b hairline py-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-ash">{k}</dt>
                <dd className="text-right text-[0.95rem]">
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="transition-colors hover:text-ember">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 border-b hairline py-5">
              <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-ash">Redes</dt>
              <dd className="flex gap-6 text-[0.95rem]">
                <a href={business.tiktok} target="_blank" rel="noreferrer" className="transition-colors hover:text-ember">TikTok</a>
                <a href={business.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-ember">Facebook</a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="space-y-8 lg:col-span-7 lg:pt-4">
          <p className="max-w-md text-[0.9rem] leading-relaxed text-ash">
            Déjanos tus datos y se abrirá WhatsApp con el mensaje listo para enviar.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <input required className="field" placeholder="Nombre" value={f.name} onChange={set('name')} />
            <input required type="tel" className="field" placeholder="Teléfono" value={f.phone} onChange={set('phone')} />
            <input type="date" className="field" value={f.date} onChange={set('date')} />
            <input className="field" placeholder="Número de personas" value={f.people} onChange={set('people')} />
          </div>
          <textarea className="field resize-none" rows={4} placeholder="¿Qué te gustaría pedir?" value={f.msg} onChange={set('msg')} />
          <button type="submit" className="btn btn-solid">Enviar por WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
