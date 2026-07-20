import { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const OFFICIAL_SOURCES = [
  {
    city: `São José dos Campos`,
    label: `Prefeitura — resíduos da construção civil`,
    href: `https://sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/residuo-construcao-civil/`,
  },
  {
    city: `São José dos Campos`,
    label: `Prefeitura — transportadores credenciados`,
    href: `https://sjc2.coletas.online/Seguranca/TransportadoresCredenciados.aspx`,
  },
  {
    city: `São José dos Campos`,
    label: `Lei Municipal nº 7.620/2008`,
    href: `https://www.sjc.sp.gov.br/legislacao/leis/2008/7620.pdf`,
  },
  {
    city: `Jacareí`,
    label: `Prefeitura — orientação sobre resíduos de construção`,
    href: `https://www.jacarei.sp.gov.br/meio-ambiente-orienta-sobre-descarte-de-residuos-de-construcao-civil/`,
  },
  {
    city: `Jacareí`,
    label: `Lei Municipal nº 4.854/2005`,
    href: `https://jacarei.sp.leg.br/l_legislacao/leismun_2005/lei_4854.htm`,
  },
] as const;

const parseMeasurement = (value: string) => {
  const normalized = value.replace(`,`, `.`).trim();
  const number = Number(normalized);
  return Number.isFinite(number) && number > 0 ? number : 0;
};

const formatNumber = (value: number) =>
  new Intl.NumberFormat(`pt-BR`, { maximumFractionDigits: 2 }).format(value);

const GuiaDescarteEntulho = () => {
  const [length, setLength] = useState(``);
  const [width, setWidth] = useState(``);
  const [height, setHeight] = useState(``);

  const estimate = useMemo(() => {
    const volume = parseMeasurement(length) * parseMeasurement(width) * parseMeasurement(height);

    if (!volume) return null;

    return {
      volume,
      minimumDumpsters: Math.max(1, Math.ceil(volume / 4)),
      maximumDumpsters: Math.max(1, Math.ceil(volume / 3)),
    };
  }, [height, length, width]);

  const title = `Guia de descarte de entulho em Jacareí e SJC`;
  const description = `Consulte regras oficiais, diferenças entre PEV, LEV e caçamba e estime gratuitamente o volume de entulho da sua obra em Jacareí ou São José dos Campos.`;
  const canonical = `https://www.nncacambas.com.br/guia-descarte-entulho-jacarei-sjc`;
  const estimateMessage = estimate
    ? `Olá, usei a calculadora do guia da N&N. Estimei ${formatNumber(
        estimate.volume,
      )} m³ de entulho e quero confirmar quantas caçambas preciso. Minha cidade e bairro são: `
    : `Olá, li o guia de descarte da N&N e quero orientação para minha obra. Minha cidade, bairro e material são: `;

  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    datePublished: `2026-07-20`,
    dateModified: `2026-07-20`,
    inLanguage: `pt-BR`,
    mainEntityOfPage: canonical,
    author: { '@type': `Organization`, name: `N&N Caçambas` },
    publisher: {
      '@type': `Organization`,
      name: `N&N Caçambas`,
      url: `https://www.nncacambas.com.br/`,
      logo: {
        '@type': `ImageObject`,
        url: `https://www.nncacambas.com.br/assets/nnLogo.webp`,
      },
    },
    citation: OFFICIAL_SOURCES.map(({ href }) => href),
  };
  const calculatorSchema = {
    '@context': `https://schema.org`,
    '@type': `WebApplication`,
    name: `Calculadora de volume de entulho`,
    url: `${canonical}#calculadora`,
    applicationCategory: `UtilitiesApplication`,
    operatingSystem: `Qualquer navegador`,
    inLanguage: `pt-BR`,
    offers: { '@type': `Offer`, price: `0`, priceCurrency: `BRL` },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#151719] font-inter">
      <Head>
        <title>{`${title} | N&N Caçambas`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${title} | N&N Caçambas`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.nncacambas.com.br/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
        />
      </Head>

      <SalesHeader />

      <main>
        <section className="bg-[#111313] text-white">
          <div className="max-w-screen-xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
            <nav aria-label="Navegação estrutural" className="text-sm text-white/55">
              <Link href="/" className="font-bold text-[#fcd535] hover:underline">
                Início
              </Link>
              {` `}
              <span aria-hidden="true">/</span> Guia de descarte
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Conteúdo gratuito · fontes oficiais
            </p>
            <h1 className="max-w-4xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Guia de descarte de entulho em Jacareí e São José dos Campos
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Entenda quando usar PEV ou LEV, quando contratar uma caçamba e quais cuidados tomar
              antes de colocar o equipamento na obra ou na via pública.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Revisado em 20 de julho de 2026. Confirme regras especiais para o endereço da obra.
            </p>
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
              Decisão rápida
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.02em] md:text-5xl">
              Qual solução faz sentido para seu volume?
            </h2>
          </div>
          <div className="grid gap-5 mt-10 md:grid-cols-3">
            <article className="rounded-2xl border border-black/10 bg-[#f7f7f5] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#897000]">
                SJC · até 1 m³
              </p>
              <h3 className="mt-4 text-xl font-black">Considere um PEV</h3>
              <p className="mt-3 leading-7 text-[#5b6165]">
                A Prefeitura informa que pequenos geradores podem entregar gratuitamente até 1 m³
                nos Pontos de Entrega Voluntária, respeitando os materiais aceitos.
              </p>
            </article>
            <article className="rounded-2xl border border-black/10 bg-[#f7f7f5] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#897000]">
                Jacareí · pequena reforma
              </p>
              <h3 className="mt-4 text-xl font-black">Verifique o LEV</h3>
              <p className="mt-3 leading-7 text-[#5b6165]">
                Os LEVs municipais recebem resíduos de pequenas obras. Para grandes volumes, a
                orientação municipal é contratar um tira-entulho regularizado.
              </p>
            </article>
            <article className="rounded-2xl bg-[#fcd535] p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-black/50">
                Volume maior ou retirada agendada
              </p>
              <h3 className="mt-4 text-xl font-black">Contrate uma caçamba</h3>
              <p className="mt-3 leading-7 text-black/65">
                Confirme material, endereço, espaço e destinação. Em SJC, consulte se o
                transportador está na relação oficial de credenciados.
              </p>
            </article>
          </div>
        </section>

        <section id="calculadora" className="bg-[#f7f7f5]">
          <div className="grid max-w-screen-xl gap-10 px-4 py-14 mx-auto lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-0 lg:py-20">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
                Ferramenta gratuita
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.02em] md:text-5xl">
                Calculadora de volume de entulho
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5b6165]">
                Meça aproximadamente o comprimento, a largura e a altura da pilha. A calculadora
                estima o volume aparente e uma faixa de caçambas de 3 a 4 m³.
              </p>
              <div className="mt-7 rounded-xl border border-[#d5bd41] bg-[#fff8cf] p-5 text-sm leading-6 text-[#5a4b00]">
                A estimativa não substitui a avaliação do material. Peso, compactação, mistura de
                resíduos, acesso e limite de carga podem alterar a quantidade necessária.
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  [`Comprimento`, length, setLength],
                  [`Largura`, width, setWidth],
                  [`Altura`, height, setHeight],
                ].map(([label, value, setter]) => (
                  <label key={label as string} className="block text-sm font-black">
                    {label as string} (m)
                    <input
                      type="text"
                      inputMode="decimal"
                      value={value as string}
                      onChange={(event) =>
                        (setter as React.Dispatch<React.SetStateAction<string>>)(event.target.value)
                      }
                      placeholder="0,00"
                      className="w-full px-4 py-3 mt-2 text-base font-normal border border-black/20 rounded-lg outline-none focus:border-[#9b7d00] focus:ring-2 focus:ring-[#fcd535]/50"
                    />
                  </label>
                ))}
              </div>

              {estimate ? (
                <div className="mt-7 rounded-2xl bg-[#111313] p-6 text-white" aria-live="polite">
                  <p className="text-sm font-bold text-white/55">Volume aparente estimado</p>
                  <p className="mt-2 text-4xl font-black text-[#fcd535]">
                    {formatNumber(estimate.volume)} m³
                  </p>
                  <p className="mt-4 leading-7 text-white/70">
                    Isso representa aproximadamente{` `}
                    <strong className="text-white">
                      {estimate.minimumDumpsters === estimate.maximumDumpsters
                        ? `${estimate.minimumDumpsters} ${
                            estimate.minimumDumpsters === 1 ? `caçamba` : `caçambas`
                          }`
                        : `${estimate.minimumDumpsters} a ${estimate.maximumDumpsters} caçambas`}
                    </strong>
                    {` `}
                    de 3 a 4 m³, antes da confirmação do tipo e do peso do material.
                  </p>
                  {estimate.volume <= 1 ? (
                    <p className="mt-4 text-sm leading-6 text-[#fcd535]">
                      Em SJC, esse volume pode se enquadrar no limite informado para PEV. Confira
                      material e condições no site da Prefeitura.
                    </p>
                  ) : null}
                </div>
              ) : (
                <div className="mt-7 rounded-xl border border-dashed border-black/20 p-5 text-sm text-[#62676b]">
                  Preencha as três medidas para visualizar a estimativa.
                </div>
              )}

              <CallToAction
                placement="calculadora_volume_guia"
                label="Confirmar estimativa no WhatsApp"
                message={estimateMessage}
                className="!max-w-none w-full justify-center"
              />
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-2xl border border-black/10 p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#897000]">
                São José dos Campos
              </p>
              <h2 className="mt-3 text-3xl font-black">Cuidados antes da colocação</h2>
              <ul className="grid gap-4 mt-6 leading-7 text-[#5b6165]">
                <li>• Sempre que possível, a caçamba deve ficar dentro do terreno da obra.</li>
                <li>
                  • Na via pública, a Lei nº 7.620/2008 prevê condições de estacionamento,
                  visibilidade, afastamento da guia e largura da via.
                </li>
                <li>
                  • Nos locais do município não tratados pelos anexos da lei, o período indicado é
                  de até cinco dias.
                </li>
                <li>
                  • Materiais perigosos, líquidos e carga acima da borda não podem ser transportados
                  na caçamba.
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-black/10 p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#897000]">
                Jacareí
              </p>
              <h2 className="mt-3 text-3xl font-black">Cuidados antes da colocação</h2>
              <ul className="grid gap-4 mt-6 leading-7 text-[#5b6165]">
                <li>• A prioridade também é manter a caçamba dentro do imóvel ou da obra.</li>
                <li>
                  • A Lei nº 4.854/2005 estabelece condições de largura da via, estacionamento,
                  distância da guia e pontos onde a colocação é proibida.
                </li>
                <li>
                  • Fora do perímetro especial, a lei informa permanência máxima de sete dias
                  seguidos, observadas as demais regras.
                </li>
                <li>
                  • A Prefeitura orienta exigir comprovação da entrega dos resíduos e informa que
                  caçambeiros devem destinar o material a uma ATT regularizada.
                </li>
              </ul>
            </article>
          </div>
          <div className="mt-10 rounded-2xl bg-[#111313] p-7 text-white md:p-10">
            <h2 className="text-3xl font-black">Checklist para pedir o orçamento correto</h2>
            <div className="grid gap-4 mt-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                `Cidade e bairro`,
                `Tipo de material`,
                `Foto ou volume aproximado`,
                `Data desejada`,
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 font-bold"
                >
                  <span className="mr-2 text-[#fcd535]">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <CallToAction
              placement="checklist_guia_descarte"
              label="Pedir orientação para minha obra"
              message={estimateMessage}
            />
          </div>
        </section>

        <section className="bg-[#f7f7f5]">
          <div className="max-w-screen-xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#897000]">
                Referências consultadas
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.02em] md:text-5xl">
                Fontes oficiais
              </h2>
              <p className="mt-5 leading-7 text-[#5b6165]">
                Este conteúdo resume informações públicas para facilitar a consulta. A legislação,
                as áreas atendidas e as regras específicas do endereço podem mudar; use sempre a
                fonte oficial como referência final.
              </p>
            </div>
            <ul className="grid gap-4 mt-8 md:grid-cols-2">
              {OFFICIAL_SOURCES.map(({ city, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full items-center justify-between gap-4 rounded-xl border border-black/10 bg-white p-5 font-bold transition hover:border-[#9b7d00] hover:shadow-sm"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.12em] text-[#897000]">
                        {city}
                      </span>
                      <span className="block mt-2">{label}</span>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SalesFooter />
    </div>
  );
};

GuiaDescarteEntulho.Layout = AdsLanding;

export default GuiaDescarteEntulho;
