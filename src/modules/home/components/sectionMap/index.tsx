import Link from 'next/link';

const SectionMap = () => {
  return (
    <section className="relative max-w-screen-xl px-4 mx-auto lg:px-0" id="sectionMap">
      <p className="font-bold uppercase tracking-wide text-[#746000] font-inter">Onde atendemos</p>
      <h2 className="max-w-3xl mt-3 text-4xl font-bold font-inter lg:text-5xl">
        Atendimento local em duas cidades
      </h2>
      <p className="max-w-2xl mt-4 text-lg leading-8 text-[#474d57]">
        A operação está concentrada em São José dos Campos e Jacareí. Escolha sua cidade para ver
        informações e pedir um orçamento com a mensagem já identificada.
      </p>
      <div className="grid gap-5 mt-10 md:grid-cols-2">
        <Link
          href="/aluguel-de-cacamba-sjc"
          className="group rounded-2xl bg-[#111313] p-7 text-white transition hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-[#fcd535]">
            Atendimento em SJC
          </p>
          <h3 className="mt-4 text-3xl font-extrabold">São José dos Campos</h3>
          <p className="mt-3 leading-7 text-white/65">
            Entrega e retirada agendadas pela unidade de Jacareí.
          </p>
          <p className="mt-6 font-bold text-[#fcd535]">Ver atendimento em SJC →</p>
        </Link>
        <Link
          href="/aluguel-de-cacamba-jacarei"
          className="group rounded-2xl bg-[#fcd535] p-7 text-black transition hover:-translate-y-1 hover:shadow-xl"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-black/55">
            Única unidade · Jacareí
          </p>
          <h3 className="mt-4 text-3xl font-extrabold">Jacareí</h3>
          <p className="mt-3 leading-7 text-black/65">
            Av. Egídio Antônio Coimbra, 739 · Parque dos Sinos
          </p>
          <p className="mt-6 font-bold">Ver atendimento em Jacareí →</p>
        </Link>
      </div>
    </section>
  );
};
export default SectionMap;
