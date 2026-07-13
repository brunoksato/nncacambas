import Link from 'next/link';
import CallToAction from '@global-components/CallToAction';
import Image from '@global-components/Image';
import QuoteForm from '@global-components/QuoteForm';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const trustItems = [
  [`Desde 2007`, `Experiência em obras e reformas`],
  [`Frota própria`, `Caminhões revisados semanalmente`],
  [`Descarte documentado`, `Destinação em usinas credenciadas`],
  [`Cadastro 19`, `Transportador cadastrado na Urbam`],
] as const;

const materials = [
  [`Entulho de obra`, `Concreto, tijolo, bloco, piso, telha e terra.`],
  [`Madeira`, `Madeiras de obra separadas dos demais resíduos.`],
  [`Gesso`, `Coleta separada para destinação adequada.`],
  [`Recicláveis`, `Plástico, papel, metal e outros materiais de obra.`],
] as const;

const faqs = [
  {
    question: `Quanto custa o aluguel da caçamba?`,
    answer: `O valor depende da cidade, do bairro, do material e do prazo. Preencha o orçamento rápido ou envie essas informações pelo WhatsApp para receber a condição correta.`,
  },
  {
    question: `Vocês atendem São José dos Campos?`,
    answer: `Sim. Atendemos São José dos Campos e Jacareí. A única unidade física da N&N fica em Jacareí.`,
  },
  {
    question: `O que não pode ser colocado na caçamba?`,
    answer: `Não aceitamos lixo doméstico, resíduos hospitalares, produtos químicos, tintas ou materiais perigosos. Se estiver em dúvida, envie uma foto no WhatsApp antes de contratar.`,
  },
  {
    question: `A caçamba pode ficar na rua?`,
    answer: `Depende das condições e regras do local. Informe o endereço no atendimento para verificarmos sinalização, espaço e eventual necessidade de autorização.`,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#151719] font-inter">
      <SalesHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-[#111313] text-white">
          <div className="absolute inset-0 -z-20 opacity-20">
            <Image
              src="/assets/nnCacambas_caminhao.webp"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              alt=""
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111313] via-[#111313]/95 to-[#111313]/70" />

          <div className="grid max-w-screen-xl gap-10 px-4 py-14 mx-auto lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-0 lg:py-20">
            <div>
              <p className="inline-flex rounded-full border border-[#fcd535]/40 bg-[#fcd535]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
                Atendimento em SJC e Jacareí
              </p>
              <h1 className="max-w-3xl mt-5 text-4xl font-black leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                Precisa de uma caçamba? Peça agora pelo WhatsApp.
              </h1>
              <p className="max-w-2xl mt-6 text-lg leading-8 text-white/75 lg:text-xl">
                Caçambas para obras, reformas, residências e empresas, com entrega e retirada
                agendadas e descarte em local credenciado.
              </p>
              <div className="flex flex-col items-start gap-3 mt-7 sm:flex-row sm:items-center">
                <CallToAction placement="hero_home_vendas" label="Pedir orçamento agora" />
                <a
                  href="#como-funciona"
                  className="mt-2 text-sm font-bold text-white/70 hover:text-white sm:mt-10"
                >
                  Ver como funciona ↓
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-sm font-bold text-white/60">
                <span>✓ Desde 2007</span>
                <span>✓ Frota própria</span>
                <span>✓ CTR do descarte</span>
              </div>
            </div>

            <QuoteForm placement="form_hero_home" />
          </div>
        </section>

        <section aria-label="Diferenciais" className="border-b border-black/10 bg-[#fcd535]">
          <div className="grid max-w-screen-xl gap-6 px-4 py-7 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
            {trustItems.map(([title, description]) => (
              <div key={title} className="border-l-2 border-black/20 pl-4">
                <p className="text-lg font-black">{title}</p>
                <p className="mt-1 text-xs leading-5 text-black/65">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[340px] overflow-hidden rounded-2xl bg-[#111313] shadow-xl md:h-[520px]">
              <Image
                src="/assets/cacamba.webp"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Caçamba estacionária da N&N disponível para aluguel"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-black/80 p-4 text-white backdrop-blur-sm">
                <p className="font-black text-[#fcd535]">Caçambas sinalizadas e frota própria</p>
                <p className="mt-1 text-sm text-white/65">
                  Entrega e retirada combinadas no atendimento.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
                Contratação sem complicação
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.02em] md:text-5xl">
                Você cuida da obra. A N&N cuida da caçamba e do descarte.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5b6165]">
                Informe o bairro, o material e quando precisa. Nossa equipe confirma
                disponibilidade, condições, entrega e retirada diretamente pelo WhatsApp.
              </p>
              <ul className="grid gap-4 mt-8 sm:grid-cols-2">
                {[
                  `Atendimento para casas e empresas`,
                  `Caçambas abertas e fechadas`,
                  `Documentação do descarte`,
                  `Orientação sobre materiais`,
                ].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-[#f7f7f5] p-4 font-bold">
                    <span className="text-[#897000]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CallToAction placement="prova_home" label="Consultar disponibilidade" />
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f5]">
          <div className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
                Qual material você precisa retirar?
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.02em] md:text-5xl">
                Caçambas para os resíduos da sua obra
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5b6165]">
                Os materiais precisam ser informados e separados para receber a destinação correta.
              </p>
            </div>
            <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {materials.map(([title, description], index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-black text-[#9b7d00]">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#62676b]">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#62676b]">
              Não sabe classificar? Envie uma foto pelo WhatsApp e nossa equipe orienta antes do
              orçamento.
            </p>
          </div>
        </section>

        <section id="como-funciona" className="bg-[#fcd535]">
          <div className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-black/50">
                Três passos
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.02em] md:text-5xl">
                Do orçamento à retirada
              </h2>
            </div>
            <div className="grid gap-5 mt-10 md:grid-cols-3">
              {[
                [`1`, `Peça pelo WhatsApp`, `Informe cidade, bairro, material e quando precisa.`],
                [
                  `2`,
                  `Confirme as condições`,
                  `Receba disponibilidade, prazo e orientação antes de contratar.`,
                ],
                [`3`, `Agende o serviço`, `Combinamos entrega, permanência e retirada da caçamba.`],
              ].map(([number, title, description]) => (
                <article key={number} className="rounded-2xl bg-[#111313] p-7 text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fcd535] font-black text-black">
                    {number}
                  </span>
                  <h3 className="mt-6 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
                Onde atendemos
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">SJC e Jacareí</h2>
              <p className="mt-5 leading-7 text-[#5b6165]">
                A única unidade física fica em Jacareí. O atendimento e as entregas cobrem também
                São José dos Campos.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Link
                href="/aluguel-de-cacamba-sjc"
                className="rounded-2xl bg-[#111313] p-7 text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#fcd535]">
                  Área atendida
                </p>
                <h3 className="mt-4 text-2xl font-black">São José dos Campos</h3>
                <p className="mt-3 leading-7 text-white/60">
                  Serviço realizado pela equipe da unidade de Jacareí.
                </p>
                <p className="mt-6 font-black text-[#fcd535]">Orçar em SJC →</p>
              </Link>
              <Link
                href="/aluguel-de-cacamba-jacarei"
                className="rounded-2xl bg-[#fcd535] p-7 text-black transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-black/50">
                  Única unidade
                </p>
                <h3 className="mt-4 text-2xl font-black">Jacareí</h3>
                <p className="mt-3 leading-7 text-black/60">
                  Av. Egídio Antônio Coimbra, 739 · Parque dos Sinos.
                </p>
                <p className="mt-6 font-black">Orçar em Jacareí →</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#111313] text-white">
          <div className="grid max-w-screen-xl gap-12 px-4 py-16 mx-auto lg:grid-cols-[0.7fr_1.3fr] lg:px-0 lg:py-24">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#fcd535]">
                Antes de contratar
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Dúvidas frequentes
              </h2>
              <p className="mt-5 leading-7 text-white/60">
                Se sua dúvida não estiver aqui, envie uma foto ou mensagem para a equipe.
              </p>
            </div>
            <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 px-6 md:px-8">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-2xl text-[#fcd535] transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-7 text-white/60">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fcd535]">
          <div className="flex max-w-screen-xl flex-col gap-7 px-4 py-14 mx-auto md:flex-row md:items-center md:justify-between lg:px-0">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-black/50">
                Pronto para começar?
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight md:text-5xl">
                Peça disponibilidade e valor pelo WhatsApp.
              </h2>
            </div>
            <CallToAction
              placement="cta_final_home"
              label="Quero um orçamento"
              className="!mt-0 shrink-0"
            />
          </div>
        </section>
      </main>

      <SalesFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <CallToAction
          placement="cta_fixo_mobile_home"
          label="Pedir orçamento no WhatsApp"
          className="!mt-0 !max-w-none w-full justify-center !py-3"
        />
      </div>
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default Home;
