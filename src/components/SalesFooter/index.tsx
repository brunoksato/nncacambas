import Link from 'next/link';
import CallToAction from '@global-components/CallToAction';
import { WHATSAPP_DISPLAY } from '@configs/contact';

export default function SalesFooter() {
  return (
    <footer className="bg-[#111313] text-white">
      <div className="grid max-w-screen-xl gap-8 px-4 py-12 mx-auto md:grid-cols-[1fr_auto] md:items-start lg:px-0">
        <div>
          <p className="text-2xl font-extrabold">N&N Caçambas</p>
          <p className="mt-3 max-w-2xl leading-7 text-white/60">
            Aluguel de caçambas com entrega e retirada em São José dos Campos e Jacareí.
          </p>
          <address className="mt-2 not-italic text-sm leading-6 text-white/60">
            Sede operacional: Avenida Egídio Antônio Coimbra, 739, Residencial Parque dos Sinos,
            Jacareí — SP, CEP 12328-513.
          </address>
          <p className="mt-2 text-sm font-bold text-[#fcd535]">WhatsApp {WHATSAPP_DISPLAY}</p>
        </div>
        <CallToAction placement="rodape_vendas" label="Solicitar orçamento" className="!mt-0" />
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-xs text-white/45">
        <div className="flex max-w-screen-xl flex-col gap-4 mx-auto md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} N&N Caçambas · Desde 2007</p>
          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/aluguel-de-cacamba" className="hover:text-[#fcd535]">
              Aluguel de caçamba
            </Link>
            <Link href="/aluguel-de-cacamba-sjc" className="hover:text-[#fcd535]">
              Atendimento em SJC
            </Link>
            <Link href="/aluguel-de-cacamba-jacarei" className="hover:text-[#fcd535]">
              Atendimento em Jacareí
            </Link>
            <Link href="/blog/locacao-de-cacamba" className="hover:text-[#fcd535]">
              Guia de locação
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
