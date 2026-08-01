import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const sources = [
  {
    label: `CONAMA — Resolução nº 307/2002 e alterações`,
    href: `https://conama.mma.gov.br/?id=305.&option=com_sisconama&task=arquivo.download`,
  },
  {
    label: `Prefeitura de São José dos Campos — sistema eletrônico de RCC`,
    href: `https://sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/sistema-eletronico/`,
  },
  {
    label: `Prefeitura de Jacareí — formulário de PGRCC`,
    href: `https://www.jacarei.sp.gov.br/wp-content/uploads/2023/05/PGRCC-1.pdf`,
  },
  {
    label: `Prefeitura de Jacareí — orientação sobre resíduos de construção`,
    href: `https://www.jacarei.sp.gov.br/meio-ambiente-orienta-sobre-descarte-de-residuos-de-construcao-civil-2/`,
  },
] as const;

const TerraEscavacaoDescarte = () => {
  const title = `Terra de escavação é entulho? Como planejar a retirada em Jacareí e SJC`;
  const description = `Entenda como informar terra e solo de escavação, separar materiais e planejar a destinação em obras de Jacareí e São José dos Campos.`;
  const canonical = `https://www.nncacambas.com.br/blog/terra-escavacao-descarte-jacarei-sjc`;
  const whatsappMessage = `Olá, vou retirar terra de escavação e quero confirmar o planejamento da caçamba. Minha cidade, bairro, material e volume aproximado são: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-08-01`,
    dateModified: `2026-08-01`,
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
        name: `Terra de escavação é resíduo da construção civil?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Sim. A Resolução CONAMA nº 307 inclui os resíduos da preparação e escavação de terrenos; solos de terraplanagem aparecem na Classe A. A destinação, porém, deve ser confirmada conforme as características do material e a estrutura licenciada que o receberá.`,
        },
      },
      {
        '@type': `Question`,
        name: `Posso misturar terra com outros restos da obra?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Evite assumir que pode. Informe antes se há concreto, cerâmica, madeira, lixo, vegetação, embalagens ou qualquer material de risco. A triagem na origem ajuda a definir o transporte e a destinação compatíveis.`,
        },
      },
      {
        '@type': `Question`,
        name: `PEV ou LEV resolve a retirada de terra?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não presuma isso. Em São José dos Campos, o PEV é indicado pela Prefeitura para pequenos geradores de até 1 m³ de entulho. Em Jacareí, os LEVs atendem pequenas obras e reformas. Confirme materiais aceitos e a alternativa adequada antes de transportar.`,
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
              {` / `}Terra de escavação
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Planejamento da obra
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Terra retirada para fundação, piscina ou nivelamento também exige planejamento.
              Separar o material e descrever o volume antes da coleta ajuda a definir uma rota de
              descarte adequada.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 1º de agosto de 2026 · leitura de 6 minutos
            </p>
          </div>
        </section>
        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              Sim, a terra retirada de escavação faz parte dos resíduos da construção civil. Mas
              isso não significa que ela deva ser tratada como um monte genérico de entulho: solo,
              pedras, restos de demolição e materiais estranhos podem exigir organização e destino
              diferentes. O primeiro passo é informar exatamente o que foi retirado, onde está a
              obra e se a terra está limpa ou misturada.
            </p>
            <p>
              A Resolução CONAMA nº 307 inclui na definição de resíduos da construção os materiais
              resultantes da preparação e escavação de terrenos. Ela classifica os solos de
              terraplanagem como Classe A, grupo de materiais que pode ser reutilizado ou reciclado
              como agregado, ou encaminhado a área de reservação apropriada. A regra não autoriza
              descarte em lote vago, encosta, corpo d’água ou área sem licenciamento.
            </p>
            <h2>Por que a terra pede uma conversa específica antes da caçamba?</h2>
            <p>
              Terra costuma parecer simples porque ocupa pouco espaço quando está compactada no
              solo. Depois de escavada, porém, forma pilhas, carrega pedras e pode vir misturada a
              raízes, concreto antigo, cerâmica ou lixo encontrado no terreno. Essa composição
              influencia a orientação de carregamento e a destinação; por isso, “terra de obra” é
              uma descrição insuficiente para pedir retirada.
            </p>
            <p>
              Um exemplo comum é a abertura de uma piscina: pode haver solo argiloso, pedras e parte
              de piso demolido. Já a escavação para uma fundação pode trazer terra junto de madeira
              de formas, embalagens e sobras de argamassa. Separe esses itens no canteiro quando for
              seguro fazê-lo. Não tente compensar a mistura acrescentando resíduos domésticos ou
              produtos químicos à pilha.
            </p>
            <h2>Faça quatro perguntas antes de organizar a coleta</h2>
            <ol>
              <li>
                <strong>O que predomina?</strong> Diga se é solo, pedra, concreto, cerâmica ou uma
                mistura. Fotos da pilha ajudam a tornar a avaliação mais fiel.
              </li>
              <li>
                <strong>Há materiais que não são terra?</strong> Informe madeira, poda, plástico,
                gesso, móveis, embalagens, tinta, óleo ou qualquer item suspeito. Itens de risco não
                devem ser colocados no fluxo comum sem orientação.
              </li>
              <li>
                <strong>Qual é o volume aproximado?</strong> Estimar o monte por comprimento,
                largura e altura oferece uma referência inicial. A{` `}
                <Link href="/guia-descarte-entulho-jacarei-sjc">
                  calculadora de volume do guia de descarte
                </Link>
                {` `}
                pode ajudar nessa conversa, mas a confirmação depende do material e do acesso.
              </li>
              <li>
                <strong>Onde a caçamba ficará?</strong> Avise se o ponto é dentro do imóvel ou na
                via. Confira antes o{` `}
                <Link href="/blog/cacamba-na-rua-ou-calcada-jacarei-sjc">
                  guia de posicionamento de caçamba
                </Link>
                , especialmente se houver portão estreito, declive, esquina ou circulação intensa.
              </li>
            </ol>
            <h2>O que muda em São José dos Campos e Jacareí</h2>
            <p>
              Em São José dos Campos, a Prefeitura informa que pequenos geradores com menos de 1 m³
              de entulho podem usar os PEVs; acima disso, a orientação é contratar transportador
              credenciado. A página municipal também disponibiliza a consulta de transportadores e
              destinos credenciados. Para uma escavação, não deduza que o PEV receberá qualquer solo
              ou quantidade: confirme os materiais aceitos antes de sair com a carga.
            </p>
            <p>
              Em Jacareí, a orientação municipal direciona resíduos de pequenas obras e reformas aos
              LEVs e aponta a retirada por tira-entulho para grandes obras ou construções. A
              Prefeitura também diferencia o fluxo das caçambas, que deve seguir para ATT
              regularizada. O formulário municipal de PGRCC inclui solo na estimativa de Classe A e
              pede a identificação de empresa responsável pelo destino e pelo transporte; isso
              mostra por que vale registrar corretamente o material desde o planejamento.
            </p>
            <h2>Evite quatro decisões que criam problema depois</h2>
            <h3>Usar a rua como depósito temporário</h3>
            <p>
              Uma pilha na calçada ou na sarjeta pode atrapalhar pedestres, escoar com a chuva e
              dificultar a coleta. Mantenha o material contido no local da obra até haver uma
              orientação de retirada.
            </p>
            <h3>Misturar materiais para “aproveitar espaço”</h3>
            <p>
              Terra com embalagem, madeira ou resíduos perigosos perde a previsibilidade da triagem.
              Separe o que puder e informe o restante; a destinação deve ser compatível com a
              composição real da carga.
            </p>
            <h3>Presumir que terra serve para aterrar qualquer área</h3>
            <p>
              Reaproveitamento não é sinônimo de despejar solo em outro terreno. Antes de movimentar
              o material, verifique se existe uso e local adequados e se não há contaminação ou
              mistura que impeça a alternativa.
            </p>
            <h3>Contratar sem confirmar destino</h3>
            <p>
              Guarde o orçamento e a documentação da retirada. Para obras que exigem gerenciamento
              formal, a identificação do transporte e do destino ganha ainda mais importância; em
              Jacareí, o PGRCC prevê comprovante de destinação por classe no momento do habite-se.
            </p>
            <h2>Como pedir orientação sem perder tempo</h2>
            <p>
              Envie cidade, bairro, foto da frente do imóvel, foto da terra e uma descrição
              objetiva: “solo de escavação com pedras”, por exemplo. Inclua as medidas aproximadas
              da pilha, avise se há piso ou concreto junto e indique quando a obra pretende iniciar
              a retirada. Com essas informações, fica mais fácil alinhar o serviço às condições
              reais, sem transformar uma dúvida de planejamento em descarte improvisado.
            </p>
            <p>
              Quando a retirada em caçamba for apropriada, conheça as opções de{` `}
              <Link href="/aluguel-de-cacamba">aluguel de caçamba em Jacareí e SJC</Link>, ou
              consulte o atendimento específico para{` `}
              <Link href="/aluguel-de-cacamba-jacarei">Jacareí</Link> e{` `}
              <Link href="/aluguel-de-cacamba-sjc">São José dos Campos</Link>.
            </p>
          </div>
          <section className="mt-12 rounded-2xl bg-[#111313] p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Retirada planejada
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Quer confirmar a retirada de terra da sua obra?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie fotos, cidade, bairro, composição e volume aproximado. A equipe orienta quais
              informações são necessárias para o pedido.
            </p>
            <CallToAction
              placement="artigo_terra_escavacao"
              label="Planejar retirada de terra no WhatsApp"
              message={whatsappMessage}
            />
          </section>
          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">
              Terra de escavação é resíduo da construção civil?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Sim. A Resolução CONAMA nº 307 abrange a escavação de terrenos e classifica os solos
              de terraplanagem como Classe A.
            </p>
            <h3 className="mt-6 text-xl font-black">
              Posso misturar terra com outros restos da obra?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Evite presumir que sim. Descreva concreto, cerâmica, madeira, lixo, vegetação ou itens
              de risco antes da retirada.
            </p>
            <h3 className="mt-6 text-xl font-black">PEV ou LEV resolve a retirada de terra?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Confirme previamente. SJC informa PEV para pequenos geradores de até 1 m³ de entulho;
              Jacareí indica LEV para pequenas obras. Materiais e condições devem ser checados com o
              serviço municipal.
            </p>
          </section>
          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta em 1º de agosto de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              As regras locais e os materiais aceitos podem mudar. Confirme as fontes e a orientação
              para o caso concreto antes da retirada.
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
                    {source.label} ↗
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

TerraEscavacaoDescarte.Layout = AdsLanding;

export default TerraEscavacaoDescarte;
