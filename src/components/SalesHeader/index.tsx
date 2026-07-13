import Link from 'next/link';
import CallToAction from '@global-components/CallToAction';
import Image from '@global-components/Image';

type Props = {
  city?: string;
};

export default function SalesHeader({ city = `SJC e Jacareí` }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fcd535]/95 backdrop-blur">
      <div className="flex h-[76px] max-w-screen-xl items-center justify-between gap-4 px-4 mx-auto lg:px-0">
        <Link
          href="/"
          className="relative block h-[54px] w-[76px] shrink-0"
          aria-label="N&N Caçambas — início"
        >
          <Image
            src="/assets/nnLogo.webp"
            layout="fill"
            objectFit="contain"
            alt="N&N Caçambas"
            priority
          />
        </Link>
        <div className="hidden text-center md:block">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-black/50">
            Atendimento
          </p>
          <p className="mt-1 text-sm font-extrabold">São José dos Campos e Jacareí</p>
        </div>
        <CallToAction
          city={city}
          placement="cabecalho_vendas"
          label="Pedir orçamento"
          className="!mt-0 !py-3 !px-4"
        />
      </div>
    </header>
  );
}
