import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import CompanyRentalForm from '@global-components/CompanyRentalForm';
import Image from '@global-components/Image';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const canonical = `https://www.nncacambas.com.br/aluguel-de-caminhao-para-empresas`;
const title = `Aluguel de Caminhão sem Motorista para Empresas | N&N`;
const description = `Aluguel de caminhões sem motorista, caçambas e caixas para empresas em São José dos Campos e Jacareí. Consulte disponibilidade pelo WhatsApp.`;
const ctaMessage = `Olá, vim pela página de locação empresarial e quero cotar caminhão sem motorista, caçamba ou caixa para minha empresa. Cidade da operação: `;

const solutions = [
  {
    title: `Caminhões sem motorista`,
    description: `Locação empresarial para sua própria operação. Modelos e disponibilidade são confirmados na cotação.`,
  },
  {
    title: `Caminhão e caçamba`,
    description: `Consulte a combinação adequada para a necessidade operacional da sua empresa.`,
  },
  {
    title: `Caçambas e caixas`,
    description: `Caçambas estacionárias e caixas fechadas para empresas, conforme demanda e disponibilidade.`,
  },
] as const;

const faqs = [
  {
    question: `O aluguel do caminhão inclui motorista?`,
    answer: `Não. A N&N aluga os caminhões sem motorista para empresas. A empresa contratante é responsável pela condução e pela operação do veículo.`,
  },
  {
    question: `Quais cidades são atendidas?`,
    answer: `Atendemos operações empresariais em São José dos Campos e Jacareí. Informe o endereço ou bairro para confirmarmos a disponibilidade.`,
  },
  {
    question: `Quais caminhões e capacidades estão disponíveis?`,
    answer: `A indicação depende da operação e da disponibilidade da frota. Envie o tipo de uso e o período pretendido para receber a opção adequada.`,
  },
  {
    question: `Também posso alugar caçambas ou caixas fechadas?`,
    answer: `Sim. A N&N atende empresas com caminhões, caçambas estacionárias e caixas fechadas, conforme a necessidade informada na cotação.`,
  },
  {
    question: `Como solicitar uma cotação empresarial?`,
    answer: `Informe o nome da empresa, a cidade, o equipamento e o período estimado. A equipe continua o atendimento diretamente pelo WhatsApp.`,
  },
] as const;

const areaServed = [
  { '@type': `City`, name: `São José dos Campos` },
  { '@type': `City`, name: `Jacareí` },
];

const businessSchema = {
  '@context': `https://schema.org`,
  '@type': `LocalBusiness`,
  '@id': `https://www.nncacambas.com.br/#empresa`,
  name: `N&N Caçambas`,
  url: `https://www.nncacambas.com.br/`,
  logo: `https://www.nncacambas.com.br/assets/nnLogo.webp`,
  image: `https://www.nncacambas.com.br/assets/caminhao3.webp`,
  telephone: `+55 12 99661-1332`,
  foundingDate: `2007`,
  description,
  areaServed,
  address: {
    '@type': `PostalAddress`,
    streetAddress: `Avenida Egídio Antônio Coimbra, 739`,
    addressLocality: `Jacareí`,
    addressRegion: `SP`,
    postalCode: `12328-513`,
    addressCountry: `BR`,
  },
};

const serviceSchema = {
  '@context': `https://schema.org`,
  '@type': `Service`,
  '@id': `${canonical}#servico`,
  name: `Aluguel de caminhão sem motorista para empresas`,
  serviceType: `Locação de caminhões sem motorista, caçambas e caixas para empresas`,
  description,
  url: canonical,
  provider: { '@id': `https://www.nncacambas.com.br/#empresa` },
  areaServed,
};

const breadcrumbSchema = {
  '@context': `https://schema.org`,
  '@type': `BreadcrumbList`,
  itemListElement: [
    {
      '@type': `ListItem`,
      position: 1,
      name: `Início`,
      item: `https://www.nncacambas.com.br/`,
    },
    {
      '@type': `ListItem`,
      position: 2,
      name: `Caminhões para empresas`,
      item: canonical,
    },
  ],
};

const faqSchema = {
  '@context': `https://schema.org`,
  '@type': `FAQPage`,
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': `Question`,
    name: question,
    acceptedAnswer: { '@type': `Answer`, text: answer },
  })),
};

const CompanyTruckRental = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.nncacambas.com.br/assets/caminhao3.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.nncacambas.com.br/assets/caminhao3.webp" />
      {[businessSchema, serviceSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>

    <div className="min-h-screen overflow-x-hidden bg-white text-[#151719] font-inter">
      <SalesHeader ctaMessage={ctaMessage} placement="cabecalho_caminhoes_b2b" />

      <main>
        <section className="relative isolate overflow-hidden bg-[#111313] text-white">
          <div className="absolute inset-0 -z-20 opacity-30">
            <Image
              src="/assets/caminhao3.webp"
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
              <nav aria-label="Navegação estrutural" className="mb-5 text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Início
                </Link>
                <span aria-hidden="true"> / </span>
                <span>Caminhões para empresas</span>
              </nav>
              <p className="inline-flex rounded-full border border-[#fcd535]/40 bg-[#fcd535]/10 px-4 py-2 text-xs font-black tracking-[0.16em] uppercase text-[#fcd535]">
                Locação exclusiva sem motorista
              </p>
              <h1 className="max-w-3xl mt-5 text-4xl font-black leading-[1.04] tracking-[-0.03em] md:text-6xl">
                Aluguel de caminhões sem motorista para empresas
              </h1>
              <p className="max-w-2xl mt-6 text-lg leading-8 text-white/80">
                Caminhões, caçambas estacionárias e caixas fechadas para operações empresariais em
                São José dos Campos e Jacareí.
              </p>
              <CallToAction
                placement="hero_caminhoes_b2b"
                label="Solicitar cotação empresarial"
                message={ctaMessage}
              />
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-white/75">
                {[[`Sem motorista`], [`Atendimento B2B`], [`SJC e Jacareí`]].map(([item]) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
            <CompanyRentalForm />
          </div>
        </section>

        <section aria-label="Diferenciais" className="border-b border-black/10 bg-[#fcd535]">
          <div className="grid max-w-screen-xl gap-6 px-4 py-8 mx-auto md:grid-cols-3 lg:px-0">
            {[
              [`Desde 2007`, `Experiência no atendimento a empresas e obras.`],
              [`Frota própria`, `Caminhões revisados semanalmente.`],
              [`Cotação objetiva`, `Equipamento e disponibilidade sob consulta.`],
            ].map(([benefitTitle, benefitDescription]) => (
              <div key={benefitTitle}>
                <p className="text-xl font-extrabold">{benefitTitle}</p>
                <p className="mt-1 text-sm leading-6 text-black/70">{benefitDescription}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-[#897000]">
              Soluções para empresas
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Informe a operação. Nós verificamos a opção disponível.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5b6165]">
              A locação é indicada para empresas que precisam reforçar a própria operação sem
              comprar outro equipamento. O caminhão é entregue sem motorista.
            </p>
          </div>
          <div className="grid gap-5 mt-10 md:grid-cols-3">
            {solutions.map(({ title: solutionTitle, description: solutionDescription }) => (
              <article
                key={solutionTitle}
                className="rounded-2xl border border-black/10 bg-[#f7f7f5] p-7"
              >
                <h3 className="text-2xl font-extrabold">{solutionTitle}</h3>
                <p className="mt-3 leading-7 text-[#5b6165]">{solutionDescription}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#111313] text-white">
          <div className="grid max-w-screen-xl gap-10 px-4 py-16 mx-auto lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-0 lg:py-24">
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 md:min-h-[440px]">
              <Image
                src="/assets/caminhao3.webp"
                layout="fill"
                objectFit="cover"
                alt="Frota de caminhões da N&N para locação empresarial"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-[#fcd535]">
                Como solicitar
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
                Uma conversa mais rápida começa com os dados certos
              </h2>
              <ol className="mt-8 space-y-6">
                {[
                  [
                    `1`,
                    `Descreva a necessidade`,
                    `Informe empresa, cidade, equipamento e período estimado.`,
                  ],
                  [
                    `2`,
                    `Receba a avaliação`,
                    `A equipe confirma disponibilidade, modelo e condições comerciais.`,
                  ],
                  [
                    `3`,
                    `Combine a locação`,
                    `Após a aprovação, entrega e demais detalhes são alinhados com sua empresa.`,
                  ],
                ].map(([number, stepTitle, stepDescription]) => (
                  <li key={number} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fcd535] font-black text-black">
                      {number}
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold">{stepTitle}</h3>
                      <p className="mt-1 leading-7 text-white/65">{stepDescription}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <CallToAction
                placement="processo_caminhoes_b2b"
                label="Falar com a N&N"
                message={ctaMessage}
              />
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-[#897000]">
                Antes de contratar
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Dúvidas frequentes</h2>
              <p className="mt-5 leading-7 text-[#5b6165]">
                Não encontrou sua necessidade? Envie os detalhes pelo WhatsApp para avaliarmos.
              </p>
            </div>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-extrabold">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-2xl text-[#9b7d00] group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-7 text-[#5b6165]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fcd535]">
          <div className="flex max-w-screen-xl flex-col gap-7 px-4 py-12 mx-auto md:flex-row md:items-center md:justify-between lg:px-0">
            <div>
              <p className="text-3xl font-black md:text-4xl">Sua empresa precisa de equipamento?</p>
              <p className="mt-2 text-black/70">
                Envie a operação e o período desejado para consultar disponibilidade.
              </p>
            </div>
            <CallToAction
              placement="cta_final_caminhoes_b2b"
              label="Pedir cotação agora"
              message={ctaMessage}
              className="!mt-0 shrink-0"
            />
          </div>
        </section>
      </main>

      <SalesFooter
        description="Locação de caminhões sem motorista, caçambas e caixas para empresas em São José dos Campos e Jacareí."
        ctaMessage={ctaMessage}
        placement="rodape_caminhoes_b2b"
      />
    </div>
  </>
);

CompanyTruckRental.Layout = AdsLanding;

export default CompanyTruckRental;
