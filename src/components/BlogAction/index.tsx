import Link from 'next/link';
import CallToAction from '@global-components/CallToAction';

export default function BlogAction() {
  return (
    <div className="flex flex-col">
      <h3>Precisa alugar uma caçamba em São José dos Campos ou Jacareí?</h3>
      <p>Informe sua cidade, bairro e o tipo de material para receber o orçamento correto.</p>
      <CallToAction placement="artigo_blog" label="Pedir orçamento pelo WhatsApp" />
      <nav aria-label="Atendimento por cidade" className="flex flex-wrap gap-4 mt-6 text-base">
        <Link href="/aluguel-de-cacamba-sjc" className="font-bold underline">
          Aluguel de caçamba em SJC
        </Link>
        <Link href="/aluguel-de-cacamba-jacarei" className="font-bold underline">
          Aluguel de caçamba em Jacareí
        </Link>
      </nav>
    </div>
  );
}
