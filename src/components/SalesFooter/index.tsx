import Link from 'next/link';
import CallToAction from '@global-components/CallToAction';
import { WHATSAPP_DISPLAY } from '@configs/contact';

export default function SalesFooter() {
  return (
    <footer className="bg-[#111313] text-white">
      <div className="grid max-w-screen-xl gap-8 px-4 py-12 mx-auto md:grid-cols-[1fr_auto] md:items-center lg:px-0">
        <div>
          <p className="text-2xl font-extrabold">N&N Caçambas</p>
          <p className="mt-3 max-w-2xl leading-7 text-white/60">
            Aluguel de caçambas em São José dos Campos e Jacareí. Sede operacional na Avenida Egídio
            Antônio Coimbra, 739, Parque dos Sinos, Jacareí — SP.
          </p>
          <p className="mt-2 text-sm font-bold text-[#fcd535]">WhatsApp {WHATSAPP_DISPLAY}</p>
        </div>
        <CallToAction placement="rodape_vendas" label="Solicitar orçamento" className="!mt-0" />
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} N&N Caçambas · Desde 2007 ·{` `}
        <Link href="/blog/locacao-de-cacamba" className="hover:text-[#fcd535]">
          Saiba mais sobre locação
        </Link>
      </div>
    </footer>
  );
}
