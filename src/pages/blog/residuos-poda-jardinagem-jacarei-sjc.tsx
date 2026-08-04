import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const sources = [
  {
    label: `Prefeitura de São José dos Campos — PEVs na cidade`,
    href: `https://sjc.sp.gov.br/servicos/manutencao-da-cidade/pevs-na-cidade/`,
  },
  {
    label: `Prefeitura de São José dos Campos — resíduo da construção civil`,
    href: `https://www.sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/residuo-construcao-civil/`,
  },
  {
    label: `Prefeitura de Jacareí — Instrução Técnica sobre podas`,
    href: `https://www.jacarei.sp.gov.br/wp-content/uploads/2026/01/Instrucao-Tecnica-Criterios-para-realizacao-de-podas_02-2025.pdf`,
  },
  {
    label: `Prefeitura de Jacareí — autorização para poda e supressão`,
    href: `https://www.jacarei.sp.gov.br/servico/autorizacoes-para-poda-e-supressao-de-arvores-em-areas-publicas-e-particulares/`,
  },
  {
    label: `Prefeitura de Jacareí — calendário de zeladoria urbana`,
    href: `https://www.jacarei.sp.gov.br/prefeitura-de-jacarei-divulga-o-calendario-de-servicos-de-zeladoria-urbana-de-janeiro/`,
  },
] as const;

const ResiduosPodaJardinagem = () => {
  const title = `Resíduos de poda e jardinagem: PEV, LEV ou caçamba em Jacareí e SJC?`;
  const description = `Descubra onde levar galhos, folhas e restos de jardinagem em Jacareí e São José dos Campos e quando uma caçamba passa a ser a solução adequada.`;
  const canonical = `https://www.nncacambas.com.br/blog/residuos-poda-jardinagem-jacarei-sjc`;
  const whatsappMessage = `Olá, preciso retirar resíduos de poda ou jardinagem. Minha cidade, bairro, material e volume aproximado são: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-08-04`,
    dateModified: `2026-08-04`,
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
        name: `Posso misturar restos de poda com tijolos na caçamba?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não presuma que a mistura é adequada. Separe galhos e folhas dos resíduos da reforma e informe a composição real antes de contratar o transporte ou a caçamba.`,
        },
      },
      {
        '@type': `Question`,
        name: `O PEV de São José dos Campos recebe resíduos de poda?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Sim, a Prefeitura informa o recebimento de resíduos de poda e jardinagem até 1 m³, com os materiais separados. A mesma página lista itens que não são recebidos, como terra, areia, tintas e óleo de motor.`,
        },
      },
      {
        '@type': `Question`,
        name: `Preciso de autorização para podar uma árvore em Jacareí?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `A Prefeitura de Jacareí orienta que a poda em áreas públicas e particulares seja solicitada previamente pelos canais do AtendeBem. Consulte a autorização antes de executar o serviço.`,
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
              {` / `}Poda e jardinagem
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Descarte responsável
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Galhos, folhas, troncos e raízes não precisam seguir automaticamente o mesmo caminho
              do entulho de uma reforma. O volume, a mistura e a cidade definem a melhor
              alternativa.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 4 de agosto de 2026 · leitura de 6 minutos
            </p>
          </div>
        </section>
        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              Em regra, resíduos de poda e jardinagem de até 1 m³ podem ser levados a um ponto
              municipal: PEV em São José dos Campos ou LEV em Jacareí. Acima desse volume, ou quando
              os galhos estão misturados com terra, tijolos, madeira de obra ou outros materiais,
              não use essa regra automaticamente. Separe o que for possível, descreva a composição e
              confirme a destinação antes de contratar transporte ou caçamba.
            </p>
            <p>
              Essa distinção evita dois erros comuns: levar ao ponto de entrega uma carga que ele
              não recebe ou colocar materiais diferentes em uma caçamba sem avisar. A decisão começa
              no local da poda, com uma triagem simples e uma estimativa honesta do volume.
            </p>

            <h2>Como decidir em três passos</h2>
            <h3>1. Separe o vegetal do restante</h3>
            <p>
              Faça pilhas diferentes para folhas e galhos, madeira ou troncos, terra e raízes,
              pedras, tijolos e demais sobras da reforma. Não é necessário desmontar um material
              perigoso por conta própria; basta isolá-lo e avisar quem fará a coleta. Uma foto da
              pilha e as medidas aproximadas ajudam mais do que dizer apenas “entulho de jardim”.
            </p>
            <p>
              Para ter uma referência inicial, meça comprimento, largura e altura do monte. A{` `}
              <Link href="/guia-descarte-entulho-jacarei-sjc">
                calculadora de volume do guia de descarte
              </Link>
              {` `}
              pode ajudar, mas a conta não substitui a confirmação do tipo de material e das
              condições de transporte.
            </p>

            <h3>2. Confira se o volume cabe no PEV ou LEV</h3>
            <p>
              Em São José dos Campos, a página oficial dos PEVs informa o recebimento gratuito de
              resíduos de poda e jardinagem até 1 m³. O usuário deve levar os materiais separados e
              respeitar as orientações da equipe. A mesma fonte informa que o PEV não recebe terra,
              areia, tintas, óleo de motor, embalagens de produtos químicos, resíduos de serviços de
              saúde e outros itens específicos.
            </p>
            <p>
              Em Jacareí, a Instrução Técnica de podas publicada pela Prefeitura informa que
              resíduos vegetais de até 1 m³ podem ser levados diretamente aos LEVs municipais. A
              orientação da zeladoria também direciona resíduos de pequenas obras aos LEVs, dentro
              do limite informado de 1 m³ por viagem. Como horários e locais podem mudar, confirme a
              unidade disponível antes de sair.
            </p>

            <h3>3. Planeje transporte para volume maior ou carga misturada</h3>
            <p>
              Se a poda gerou mais de 1 m³, se há troncos pesados ou se o resíduo está junto de
              tijolos e outros restos de obra, o ponto de entrega pode não ser a solução adequada.
              Em São José dos Campos, a Prefeitura orienta que volumes acima de 1 m³ sejam
              encaminhados por empresas credenciadas e que o sistema municipal acompanhe a origem e
              a destinação. Em Jacareí, a instrução técnica atribui ao responsável pela poda a
              destinação em local devidamente licenciado.
            </p>
            <p>
              Nessa situação, a caçamba pode ser conveniente para evitar viagens e manter o material
              contido, mas o pedido precisa informar a composição real: galhos, folhas, troncos,
              raízes, terra, pedras ou resíduos de reforma. Para avaliar a retirada, consulte o{` `}
              <Link href="/aluguel-de-cacamba">aluguel de caçamba em Jacareí e SJC</Link> ou envie
              os dados para o atendimento específico de{` `}
              <Link href="/aluguel-de-cacamba-jacarei">Jacareí</Link> e{` `}
              <Link href="/aluguel-de-cacamba-sjc">São José dos Campos</Link>.
            </p>

            <h2>O que muda entre Jacareí e São José dos Campos?</h2>
            <p>
              A lógica é parecida, mas os nomes e os procedimentos municipais não são os mesmos:
            </p>
            <ul>
              <li>
                <strong>São José dos Campos:</strong> o PEV recebe poda e jardinagem até 1 m³, além
                de outros fluxos listados pela Prefeitura. Terra e areia aparecem entre os materiais
                não recebidos. Para volumes maiores, consulte empresas credenciadas.
              </li>
              <li>
                <strong>Jacareí:</strong> a Prefeitura informa que resíduos vegetais até 1 m³ podem
                ser levados aos LEVs. Antes de podar uma árvore, consulte o serviço municipal de
                autorização pelo AtendeBem e siga a instrução técnica para execução e destinação.
              </li>
            </ul>
            <p>
              Portanto, não escolha o destino apenas pelo tamanho da caçamba ou pela distância até o
              ponto. O material precisa chegar separado e dentro da categoria aceita pela cidade.
            </p>

            <h2>Três exemplos práticos</h2>
            <h3>Limpeza de um quintal pequeno</h3>
            <p>
              Depois de uma poda leve, você tem folhas e galhos limpos, sem terra, em volume menor
              que 1 m³. Em SJC, a alternativa indicada é consultar um PEV; em Jacareí, um LEV. Leve
              o material acondicionado de modo que não se espalhe no caminho e confirme o horário da
              unidade.
            </p>
            <h3>Poda junto com quebra de piso</h3>
            <p>
              Separe o vegetal dos pedaços de cerâmica, argamassa e terra. Se cada fluxo for
              pequeno, verifique as regras do PEV ou LEV. Se a soma ultrapassar o limite ou o acesso
              exigir retirada agendada, informe tudo no orçamento. Não esconda o material de
              jardinagem sob uma camada de entulho mineral.
            </p>
            <h3>Árvore de grande porte ou remoção autorizada</h3>
            <p>
              A prioridade é a segurança da poda e a autorização municipal aplicável. Em Jacareí, a
              Prefeitura exige que a destinação do material seja providenciada pelo responsável em
              local licenciado; o volume e o peso dos troncos podem exigir uma solução de transporte
              diferente de um PEV ou LEV. Planeje a retirada antes de iniciar o serviço.
            </p>

            <h2>Cuidados de segurança e de organização</h2>
            <p>
              Não faça poda em altura, perto de rede elétrica ou com motosserra sem equipe treinada
              e equipamentos adequados. A instrução técnica de Jacareí prevê EPI, sinalização e
              isolamento da área para os serviços de poda. Durante a espera, mantenha galhos e
              folhas dentro do imóvel, sem bloquear calçada, sarjeta ou acesso de vizinhos. Descarte
              irregular não é uma alternativa temporária.
            </p>
            <p>
              Também não coloque tintas, óleo de motor, embalagens químicas, lixo doméstico ou
              resíduos de saúde junto da poda. Em São José dos Campos, esses itens aparecem
              expressamente entre os materiais não recebidos pelos PEVs; para qualquer carga mista,
              confirme a orientação antes da entrega.
            </p>
          </div>

          <section className="mt-12 rounded-2xl bg-[#111313] p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Retirada planejada
            </p>
            <h2 className="mt-3 text-3xl font-black">Quer confirmar o destino da sua poda?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie cidade, bairro, fotos, tipo de resíduo e volume aproximado. A equipe orienta as
              informações necessárias para avaliar a retirada em caçamba.
            </p>
            <CallToAction
              placement="artigo_poda_jardinagem"
              label="Planejar retirada de poda no WhatsApp"
              message={whatsappMessage}
            />
          </section>

          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">
              Posso misturar restos de poda com tijolos na caçamba?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não presuma que a mistura é adequada. Separe os fluxos e informe a composição real
              antes de contratar o transporte ou a caçamba.
            </p>
            <h3 className="mt-6 text-xl font-black">
              O PEV de São José dos Campos recebe resíduos de poda?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Sim. A Prefeitura informa o recebimento de poda e jardinagem até 1 m³, com os
              materiais separados. Terra, areia, tintas e óleo de motor aparecem entre os itens não
              recebidos.
            </p>
            <h3 className="mt-6 text-xl font-black">
              Preciso de autorização para podar uma árvore em Jacareí?
            </h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              A Prefeitura orienta que o pedido de poda em área pública ou particular seja feito
              previamente pelo AtendeBem. Consulte a autorização antes de executar o serviço.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta em 4 de agosto de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              As regras, os limites e os horários podem ser atualizados pelos municípios. Consulte
              as páginas oficiais antes de transportar o material e confirme o caso concreto.
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

ResiduosPodaJardinagem.Layout = AdsLanding;

export default ResiduosPodaJardinagem;
