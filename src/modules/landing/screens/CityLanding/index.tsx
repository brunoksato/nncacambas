import Head from 'next/head';
import CallToAction from '@global-components/CallToAction';
import Image from '@global-components/Image';
import QuoteForm from '@global-components/QuoteForm';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';
import { WHATSAPP_DISPLAY } from '@configs/contact';

export type CityLandingConfig = {
  city: `São José dos Campos` | `Jacareí`;
  slug: string;
  localProof: string;
};

const unitAddress = {
  street: `Avenida Egídio Antônio Coimbra, 739`,
  neighborhood: `Residencial Parque dos Sinos`,
  city: `Jacareí`,
  postalCode: `12328-513`,
} as const;

const benefits = [
  { title: `Desde 2007`, description: `Experiência em obras residenciais e empresas.` },
  { title: `Frota própria`, description: `Caminhões revisados semanalmente e entrega agendada.` },
  { title: `Descarte documentado`, description: `Resíduos destinados a usinas credenciadas.` },
] as const;

const materials = [
  `Entulho de obra: concreto, tijolos, blocos, pisos e terra`,
  `Madeira separada`,
  `Gesso separado`,
  `Materiais recicláveis de obra`,
] as const;

const forbiddenMaterials = [
  `Lixo doméstico ou orgânico`,
  `Produtos químicos, tintas e solventes`,
  `Resíduos hospitalares`,
  `Materiais acima do limite da caçamba`,
] as const;

export default function CityLanding({ city, slug, localProof }: CityLandingConfig) {
  const isJacarei = city === `Jacareí`;
  const canonical = `https://www.nncacambas.com.br/${slug}`;
  const title = `Aluguel de Caçamba em ${city} | N&N Caçambas`;
  const description = `Aluguel de caçamba para obras, reformas e empresas em ${city}. Frota própria, descarte documentado e atendimento desde 2007. Peça seu orçamento.`;
  const faqs = [
    {
      question: `Quanto custa alugar uma caçamba em ${city}?`,
      answer: `O valor depende do endereço, do material e do prazo de permanência. Envie o bairro e o tipo de resíduo pelo WhatsApp para receber um orçamento correto.`,
    },
    {
      question: `Quais materiais podem ser colocados na caçamba?`,
      answer: `Atendemos entulho de construção, madeira, gesso e recicláveis de obra. Os materiais devem ser separados; lixo doméstico, produtos químicos e resíduos hospitalares não são aceitos.`,
    },
    {
      question: `A caçamba pode ficar na rua?`,
      answer: `Depende das regras e das condições do local. Informe o endereço no orçamento para verificarmos espaço, sinalização e eventual necessidade de autorização.`,
    },
    {
      question: `Como funciona a entrega e a retirada?`,
      answer: `Após confirmar o orçamento, combinamos a entrega e a retirada. A disponibilidade e o prazo são informados no atendimento, sem promessas que não possam ser cumpridas.`,
    },
  ];
  const businessSchema = {
    '@context': `https://schema.org`,
    '@type': `LocalBusiness`,
    name: `N&N Caçambas`,
    url: canonical,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    telephone: `+55 12 99661-1332`,
    foundingDate: `2007`,
    description,
    areaServed: { '@type': `City`, name: city },
    address: {
      '@type': `PostalAddress`,
      streetAddress: unitAddress.street,
      addressLocality: unitAddress.city,
      addressRegion: `SP`,
      postalCode: unitAddress.postalCode,
      addressCountry: `BR`,
    },
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.nncacambas.com.br/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.nncacambas.com.br/og.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-white text-[#151719] font-inter">
        <SalesHeader city={city} />

        <main>
          <section className="relative isolate overflow-hidden bg-[#111313] text-white">
            <div className="absolute inset-0 -z-20 opacity-20">
              <Image
                src="/assets/cacamba.webp"
                layout="fill"
                objectFit="cover"
                sizes="100vw"
                alt=""
                priority
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111313] via-[#111313]/95 to-[#111313]/75" />
            <div className="grid max-w-screen-xl gap-10 px-4 py-14 mx-auto lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-0 lg:py-20">
              <div>
                <p className="inline-flex rounded-full border border-[#fcd535]/40 bg-[#fcd535]/10 px-4 py-2 text-xs font-black tracking-[0.16em] uppercase text-[#fcd535]">
                  Aluguel de caçamba em {city}
                </p>
                <h1 className="max-w-3xl mt-5 text-4xl font-black leading-[1.04] tracking-[-0.03em] md:text-6xl">
                  Precisa de caçamba em {city}? Peça agora pelo WhatsApp.
                </h1>
                <p className="max-w-2xl mt-6 text-lg leading-8 text-white/75">
                  Para reformas, construções, residências e empresas, com frota própria, caçambas
                  sinalizadas e descarte em usinas credenciadas.
                </p>
                <CallToAction city={city} placement="hero_landing" label="Pedir orçamento agora" />
                <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white/70 backdrop-blur-sm">
                  ✓ {localProof}
                </div>
              </div>
              <QuoteForm initialCity={city} placement="form_hero_landing" />
            </div>
          </section>

          <section aria-label="Diferenciais" className="border-b border-black/10 bg-[#fcd535]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-6 md:grid-cols-3 lg:px-0">
              {benefits.map(({ title: benefitTitle, description: benefitDescription }) => (
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
                Simples e direto
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Como alugar sua caçamba</h2>
            </div>
            <div className="grid gap-5 mt-10 md:grid-cols-3">
              {[
                [
                  `01`,
                  `Envie os dados`,
                  `Informe bairro, tipo de material e quando precisa da caçamba.`,
                ],
                [
                  `02`,
                  `Confirme o orçamento`,
                  `Você recebe disponibilidade, prazo e condições antes de contratar.`,
                ],
                [
                  `03`,
                  `Entrega e retirada`,
                  `Agendamos o serviço e destinamos os resíduos a local credenciado.`,
                ],
              ].map(([number, stepTitle, stepDescription]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-black/10 bg-[#f7f7f5] p-7"
                >
                  <p className="text-sm font-black text-[#9b7d00]">{number}</p>
                  <h3 className="mt-5 text-2xl font-extrabold">{stepTitle}</h3>
                  <p className="mt-3 leading-7 text-[#5b6165]">{stepDescription}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#111313] text-white">
            <div className="grid max-w-screen-xl gap-10 px-4 py-16 mx-auto lg:grid-cols-2 lg:px-0 lg:py-24">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] uppercase text-[#fcd535]">
                  Antes de pedir
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
                  O que pode ir na caçamba
                </h2>
                <ul className="mt-8 space-y-4">
                  {materials.map((material) => (
                    <li key={material} className="flex gap-3 leading-7 text-white/80">
                      <span aria-hidden="true" className="font-black text-[#fcd535]">
                        ✓
                      </span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:p-9">
                <h3 className="text-2xl font-extrabold">Não colocamos</h3>
                <ul className="mt-6 space-y-4">
                  {forbiddenMaterials.map((material) => (
                    <li key={material} className="flex gap-3 leading-7 text-white/70">
                      <span aria-hidden="true" className="font-black text-[#fcd535]">
                        —
                      </span>
                      {material}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
                  Materiais diferentes precisam ser separados. Em caso de dúvida, envie uma foto
                  antes de contratar.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-screen-xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] uppercase text-[#897000]">
                  Atendimento em {city}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
                  {isJacarei
                    ? `Única unidade da N&N em Jacareí`
                    : `Atendimento em SJC, com base em Jacareí`}
                </h2>
                <p className="mt-5 leading-7 text-[#5b6165]">
                  A N&N atua desde 2007, mantém frota própria revisada, caçambas sinalizadas e
                  documentação do descarte. A única unidade física fica em Jacareí.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f7f7f5] p-7 sm:col-span-2">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#746000]">
                    Única unidade — Jacareí
                  </p>
                  <address className="mt-3 not-italic text-xl font-bold leading-8">
                    {unitAddress.street}
                    <br />
                    {unitAddress.neighborhood}, {unitAddress.city} — SP
                    <br />
                    CEP {unitAddress.postalCode}
                  </address>
                </div>
                <div className="rounded-2xl border border-black/10 p-7">
                  <p className="font-extrabold">Cadastro 19 na Urbam</p>
                  <p className="mt-2 text-sm leading-6 text-[#5b6165]">
                    Conformidade informada pela empresa para a operação em SJC.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 p-7">
                  <p className="font-extrabold">CTR do descarte</p>
                  <p className="mt-2 text-sm leading-6 text-[#5b6165]">
                    Documento que comprova a destinação em local regularizado.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f7f5]">
            <div className="max-w-4xl px-4 py-16 mx-auto lg:px-0 lg:py-24">
              <h2 className="text-3xl font-extrabold text-center md:text-5xl">
                Dúvidas frequentes
              </h2>
              <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white px-6 md:px-8">
                {faqs.map(({ question, answer }) => (
                  <details key={question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold">
                      {question}
                      <span
                        aria-hidden="true"
                        className="text-2xl text-[#897000] group-open:rotate-45 transition"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-3xl pt-4 leading-7 text-[#5b6165]">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#fcd535]">
            <div className="flex max-w-screen-xl flex-col gap-6 px-4 py-14 mx-auto md:flex-row md:items-center md:justify-between lg:px-0">
              <div>
                <h2 className="text-3xl font-extrabold">Precisa de uma caçamba em {city}?</h2>
                <p className="mt-2 text-black/70">
                  Fale com a N&N pelo WhatsApp {WHATSAPP_DISPLAY}.
                </p>
              </div>
              <CallToAction
                city={city}
                placement="rodape_landing"
                label="Solicitar orçamento"
                className="!mt-0"
              />
            </div>
          </section>
        </main>

        <SalesFooter />

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
          <CallToAction
            city={city}
            placement="cta_fixo_mobile"
            label="Orçar pelo WhatsApp"
            className="!mt-0 !max-w-none w-full justify-center !py-3"
          />
        </div>
        <div className="h-20 md:hidden" aria-hidden="true" />
      </div>
    </>
  );
}
