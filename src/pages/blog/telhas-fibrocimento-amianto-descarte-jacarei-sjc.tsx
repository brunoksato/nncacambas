import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const sources = [
  {
    label: `Prefeitura de São José dos Campos — PEVs na cidade`,
    href: `https://www.sjc.sp.gov.br/servicos/manutencao-da-cidade/pevs-na-cidade/`,
    accessed: `7 de agosto de 2026`,
  },
  {
    label: `Prefeitura de São José dos Campos — resíduo da construção civil`,
    href: `https://www.sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/residuo-construcao-civil/`,
    accessed: `7 de agosto de 2026`,
  },
  {
    label: `Prefeitura de Jacareí — descarte de resíduos de construção civil`,
    href: `https://www.jacarei.sp.gov.br/meio-ambiente-orienta-sobre-descarte-de-residuos-de-construcao-civil-2/`,
    accessed: `7 de agosto de 2026`,
  },
  {
    label: `Fundacentro — boas práticas em desamiantagem`,
    href: `https://www.gov.br/fundacentro/pt-br/centrais-de-conteudo/faq-desamiantagem/boas-praticas-em-desamiantagem`,
    accessed: `7 de agosto de 2026`,
  },
  {
    label: `CONAMA — Resolução nº 348/2004`,
    href: `https://conama.mma.gov.br/index.php?id=15073&option=com_sisconama&task=documento.download`,
    accessed: `7 de agosto de 2026`,
  },
] as const;

const TelhasFibrocimentoAmianto = () => {
  const title = `Telha de fibrocimento ou amianto: como descartar em Jacareí e SJC`;
  const description = `Veja como planejar a retirada de telhas e caixas d’água de fibrocimento com suspeita de amianto em Jacareí e São José dos Campos, sem misturar o material em uma caçamba comum.`;
  const canonical = `https://www.nncacambas.com.br/blog/telhas-fibrocimento-amianto-descarte-jacarei-sjc`;
  const whatsappMessage = `Olá, tenho telhas ou caixa d’água de fibrocimento com suspeita de amianto e quero confirmar a retirada e a destinação. Minha cidade, bairro, estado do material e volume são: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-08-07`,
    dateModified: `2026-08-07`,
    inLanguage: `pt-BR`,
    mainEntityOfPage: canonical,
    author: {
      '@type': `Organization`,
      name: `N&N Caçambas`,
      url: `https://www.nncacambas.com.br/`,
    },
    publisher: {
      '@type': `Organization`,
      name: `N&N Caçambas`,
      url: `https://www.nncacambas.com.br/`,
      logo: { '@type': `ImageObject`, url: `https://www.nncacambas.com.br/assets/nnLogo.webp` },
    },
    citation: sources.map(({ href }) => href),
  };
  const breadcrumbSchema = {
    '@context': `https://schema.org`,
    '@type': `BreadcrumbList`,
    itemListElement: [
      { '@type': `ListItem`, position: 1, name: `Início`, item: `https://www.nncacambas.com.br/` },
      {
        '@type': `ListItem`,
        position: 2,
        name: `Conteúdos e guias`,
        item: `https://www.nncacambas.com.br/blog`,
      },
      { '@type': `ListItem`, position: 3, name: title, item: canonical },
    ],
  };
  const faqSchema = {
    '@context': `https://schema.org`,
    '@type': `FAQPage`,
    mainEntity: [
      {
        '@type': `Question`,
        name: `Posso colocar telha com amianto em uma caçamba comum?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não presuma que pode. A Resolução CONAMA nº 348/2004 classifica materiais com amianto como resíduos perigosos, e a destinação deve ser confirmada com o município e com um operador que aceite esse fluxo.`,
        },
      },
      {
        '@type': `Question`,
        name: `São José dos Campos recebe telhas de fibrocimento ou amianto no PEV?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `A página oficial dos PEVs lista telhas e caixas d’água de fibrocimento/amianto entre os resíduos recebidos até 1 m³. Confirme com a unidade ou com a Prefeitura antes de transportar, principalmente se a peça estiver quebrada ou misturada.`,
        },
      },
      {
        '@type': `Question`,
        name: `O que fazer se não sei se a telha contém amianto?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não quebre nem faça furos para tentar identificar. Na dúvida, trate o material como se contivesse amianto, isole a área e busque orientação de profissional capacitado e do serviço municipal.`,
        },
      },
    ],
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
        <meta property="og:image" content="https://www.nncacambas.com.br/assets/cacamba.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              {` / `}
              <Link href="/blog" className="font-bold text-[#fcd535] hover:underline">
                Conteúdos e guias
              </Link>
              {` / `}Fibrocimento e amianto
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Segurança no descarte
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              O material pode parecer entulho comum, mas a suspeita de amianto muda a forma de
              remover, acondicionar e confirmar a destinação.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 7 de agosto de 2026 · leitura de 7 minutos
            </p>
          </div>
        </section>
        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              Telhas, caixas d’água e placas antigas de fibrocimento devem ser tratadas com cautela
              quando houver suspeita de amianto. Não quebre, fure, lixe ou serre a peça para
              acelerar a reforma e não a coloque automaticamente em uma caçamba comum. Primeiro,
              confirme a orientação do município, planeje a remoção com profissional capacitado e
              combine a destinação adequada.
            </p>
            <p>
              A resposta local exige atenção a uma diferença importante: a Prefeitura de São José
              dos Campos lista telhas e caixas d’água de fibrocimento/amianto entre os materiais
              recebidos nos PEVs até 1 m³, enquanto a orientação federal de segurança trata
              materiais com amianto como perigosos. Em Jacareí, a página municipal consultada
              orienta o uso de LEVs para pequenos volumes de resíduos de obras e a destinação por
              caçambeiros em ATT, mas não apresenta ali um fluxo específico para amianto. Por isso,
              a confirmação prévia é parte do descarte — não uma etapa opcional.
            </p>

            <h2>Por que a telha antiga não deve ser tratada como entulho comum?</h2>
            <p>
              O amianto pode estar presente em telhas onduladas, caixas d’água, calhas e placas de
              fibrocimento. A Fundacentro alerta que a poeira liberada ao quebrar, furar, lixar,
              jatear ou serrar materiais com amianto pode ser respirada. A exposição está associada
              a doenças graves, então uma troca de cobertura ou de caixa d’água precisa começar pela
              avaliação do estado da peça e do risco da retirada.
            </p>
            <p>
              Também é difícil identificar o material apenas olhando. A Fundacentro informa que
              produtos fabricados até 2000 contêm amianto, enquanto alguns fibrocimento posteriores
              passaram a ser produzidos sem ele; quando não houver certeza, a recomendação prudente
              é considerar a suspeita e não improvisar uma demolição.
            </p>

            <h2>O que fazer antes de retirar a peça</h2>
            <h3>1. Pare a quebra e registre a situação</h3>
            <p>
              Fotografe a telha ou caixa d’água sem manipular desnecessariamente e anote se está
              inteira, deteriorada ou já quebrada. Isole a área de circulação, mantenha crianças e
              animais afastados e não varra a seco a poeira ou os fragmentos. Se o material estiver
              em bom estado e não oferecer risco imediato, não é obrigatório removê-lo apenas por
              ser antigo; a decisão deve considerar as condições técnicas e legais.
            </p>

            <h3>2. Não tente fazer a retirada sozinho</h3>
            <p>
              A remoção de material contendo amianto requer planejamento para evitar a liberação de
              fibras e acidentes. A orientação da Fundacentro é buscar profissionais capacitados. Em
              uma obra maior, inclua no planejamento quem fará a remoção, como a peça será
              acondicionada, qual transportador foi confirmado e para qual unidade licenciada ela
              seguirá.
            </p>

            <h3>3. Confirme o destino antes de agendar o transporte</h3>
            <p>
              Pergunte ao PEV, LEV, transportador ou área receptora se o fluxo aceita material com
              suspeita de amianto e informe o estado da peça. Não use apenas a palavra “telha” no
              orçamento: diga “fibrocimento com suspeita de amianto”, informe a quantidade, as
              dimensões aproximadas e se há outros resíduos na mesma reforma.
            </p>

            <h2>Como funciona em São José dos Campos?</h2>
            <p>
              A página oficial dos PEVs informa o recebimento gratuito de pequenos volumes até 1 m³
              e lista, entre os resíduos aceitos, telhas e caixas d’água de fibrocimento/amianto.
              Ela também determina que o usuário leve os materiais separados e informa que volumes
              acima de 1 m³ devem ser encaminhados por empresas credenciadas. A página de RCC da
              Prefeitura reforça a distinção entre pequenos e grandes geradores e a responsabilidade
              pela destinação.
            </p>
            <p>
              Esse limite municipal não transforma uma telha com amianto em entulho comum. A
              Resolução CONAMA nº 348/2004 incluiu telhas e outros materiais que contêm amianto na
              Classe D, de resíduos perigosos. Antes de levar uma peça, principalmente se estiver
              quebrada, confirme o procedimento com a Prefeitura ou com o PEV escolhido. A própria
              página municipal informa o telefone (12) 3945-9500 e o canal 156 para orientações.
            </p>

            <h2>E em Jacareí?</h2>
            <p>
              A orientação municipal consultada sobre resíduos de construção informa que os LEVs
              recebem resíduos de pequenas obras e reformas e que, para grandes obras, o material
              deve ser retirado por tira-entulho. A mesma publicação diferencia a entrega por
              carroceiros da operação de caçambeiros, que devem destinar o material a uma ATT
              regularizada.
            </p>
            <p>
              Como essa página não especifica um procedimento para telhas ou caixas d’água com
              amianto, não leve uma peça suspeita ao LEV sem confirmar o aceite e a forma de
              acondicionamento. Para uma reforma com carga mista, separe a peça suspeita do
              concreto, cerâmica, madeira e demais resíduos e informe a condição real no pedido de
              orientação. O{` `}
              <Link href="/guia-descarte-entulho-jacarei-sjc">guia de descarte de entulho</Link>
              {` `}da N&N ajuda a organizar o volume e os caminhos municipais, mas não substitui a
              autorização do ponto receptor para um material perigoso.
            </p>

            <h2>Como acondicionar e transportar com mais segurança?</h2>
            <p>
              A Fundacentro recomenda que peças grandes sejam retiradas intactas, sem quebras ou
              perfurações, e imediatamente envolvidas por duas camadas de polietileno, rotuladas,
              fixadas com cintas e apoiadas sobre paletes; peças quebradas exigem acondicionamento
              próprio, como big bags para serviço pesado. Essas orientações não são uma receita para
              uma remoção doméstica: elas mostram por que a logística deve ser combinada antes e por
              que uma caçamba aberta comum não deve ser usada sem confirmação específica.
            </p>
            <p>
              Não misture amianto com lixo doméstico, madeira, poda ou entulho mineral. Se a reforma
              também gerar cerâmica, concreto ou terra, faça a triagem no imóvel e peça um plano de
              retirada para cada fluxo. Para os resíduos comuns da obra, consulte o serviço de
              <Link href="/aluguel-de-cacamba">aluguel de caçamba em Jacareí e SJC</Link>; a equipe
              precisa saber exatamente o que será colocado no equipamento. Se o endereço for em
              <Link href="/aluguel-de-cacamba-jacarei">Jacareí</Link> ou em
              <Link href="/aluguel-de-cacamba-sjc">São José dos Campos</Link>, use a página da
              cidade para iniciar a cotação e descreva separadamente qualquer peça suspeita.
            </p>

            <h2>Três situações práticas</h2>
            <h3>Telhas inteiras em uma troca de cobertura</h3>
            <p>
              Não empilhe as peças para quebrá-las depois nem deixe a retirada para o dia da entrega
              da caçamba. Confirme o destino, o acondicionamento e o transportador antes de
              desmontar a cobertura.
            </p>
            <h3>Caixa d’água antiga ainda instalada</h3>
            <p>
              Se estiver íntegra e estável, evite manuseio desnecessário. Se a troca for necessária,
              informe que se trata de uma caixa de fibrocimento com suspeita de amianto e planeje o
              içamento e o acondicionamento com profissional habilitado.
            </p>
            <h3>Fragmentos misturados ao entulho da demolição</h3>
            <p>
              Pare a movimentação, afaste as pessoas da área e não tente separar os fragmentos sem
              orientação. Avise o transportador sobre a suspeita; uma caçamba para resíduos minerais
              não deve receber a carga sem confirmação do destino e do procedimento aplicável.
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Quer confirmar a retirada antes da reforma?
            </h2>
            <p>
              Envie fotos sem manipular o material, cidade, bairro, quantidade aproximada, estado
              das peças e os outros resíduos da obra. A N&N pode avaliar as informações da retirada
              e orientar o que precisa ser confirmado antes de agendar o serviço, sem prometer
              recebimento de amianto em caçamba comum.
            </p>
            <CallToAction
              placement="artigo_fibrocimento_amianto"
              label="Confirmar retirada de fibrocimento no WhatsApp"
              message={whatsappMessage}
            />
          </div>

          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">
              Posso colocar telha com amianto em uma caçamba comum?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não presuma que pode. A Resolução CONAMA nº 348/2004 classifica materiais com amianto
              como Classe D, e a destinação precisa ser confirmada com o município e com o operador
              que aceite esse fluxo.
            </p>
            <h3 className="mt-6 text-xl font-black">
              São José dos Campos recebe fibrocimento ou amianto no PEV?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              A página oficial dos PEVs lista telhas e caixas d’água de fibrocimento/amianto entre
              os resíduos recebidos até 1 m³. Confirme com a unidade antes de transportar,
              especialmente se a peça estiver quebrada ou misturada.
            </p>
            <h3 className="mt-6 text-xl font-black">
              O que fazer se não sei se a telha contém amianto?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não quebre, fure ou lixe para tentar identificar. Na dúvida, trate o material como se
              contivesse amianto, isole a área e busque orientação de profissional capacitado e do
              serviço municipal.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta realizada em 7 de agosto de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              Limites, horários e procedimentos municipais podem mudar. Confirme o caso concreto
              antes de retirar, transportar ou entregar qualquer material com suspeita de amianto.
            </p>
            <ul className="grid gap-3 mt-6 list-none pl-0">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-black/10 bg-white p-4 font-bold text-[#5a4b00] hover:underline"
                  >
                    {source.label} — acesso em {source.accessed} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SalesFooter />
    </div>
  );
};

TelhasFibrocimentoAmianto.Layout = AdsLanding;

export default TelhasFibrocimentoAmianto;
