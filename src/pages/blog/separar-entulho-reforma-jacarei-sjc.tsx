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
    label: `CETESB — Classificação dos resíduos da construção civil`,
    href: `https://repositorio.cetesb.sp.gov.br/bitstreams/7010a7f3-f036-4855-89ab-4dc3eb7cd745/download`,
  },
  {
    label: `Prefeitura de São José dos Campos — resíduos da construção civil`,
    href: `https://www.sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/residuo-construcao-civil/`,
  },
  {
    label: `Prefeitura de Jacareí — orientação sobre descarte de RCC`,
    href: `https://www.jacarei.sp.gov.br/meio-ambiente-orienta-sobre-descarte-de-residuos-de-construcao-civil/`,
  },
] as const;

const SepararEntulhoReforma = () => {
  const title = `Como separar o entulho da reforma antes de pedir caçamba em Jacareí e SJC`;
  const description = `Aprenda a organizar tijolos, madeira, gesso, embalagens e materiais de risco antes da retirada de entulho em Jacareí e São José dos Campos.`;
  const canonical = `https://www.nncacambas.com.br/blog/separar-entulho-reforma-jacarei-sjc`;
  const whatsappMessage = `Olá, vou iniciar uma reforma e quero confirmar como separar os resíduos antes de pedir a caçamba. Minha cidade, bairro e materiais são: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-07-29`,
    dateModified: `2026-07-29`,
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
        name: `Posso misturar madeira e entulho mineral?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não presuma que pode. Madeira é resíduo Classe B, enquanto tijolos, concreto e argamassa são normalmente Classe A. Descreva todos os materiais à empresa antes da entrega para que a orientação e a destinação sejam compatíveis.`,
        },
      },
      {
        '@type': `Question`,
        name: `O que fazer com tinta, solvente ou material com amianto?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não coloque esses materiais na caçamba sem orientação específica. A Resolução CONAMA 307 os trata como resíduos que exigem manejo e destinação específicos; materiais com amianto devem ser mantidos em embalagem vedada para evitar dispersão de fibras.`,
        },
      },
      {
        '@type': `Question`,
        name: `PEV ou LEV substitui a caçamba?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Depende do volume e das condições do município. São José dos Campos informa PEVs para pequenos geradores de até 1 m³. Jacareí direciona os LEVs a pequenas obras e reformas; para grandes obras, a orientação é usar tira-entulho.`,
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
              {` / `}Separar entulho
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Planejamento de reforma
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Como separar o entulho da reforma antes de pedir caçamba em Jacareí e SJC
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Separe o que é mineral, reciclável e de risco antes da demolição. Assim você pede a
              solução certa, evita surpresa na retirada e preserva opções de destinação.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 29 de julho de 2026 · leitura de 7 minutos
            </p>
          </div>
        </section>
        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              A forma mais segura de organizar o entulho é fazer uma triagem simples antes de a
              caçamba chegar: deixe tijolos, concreto e argamassa em um grupo; mantenha madeira,
              metal, plástico, papelão e gesso identificados; e isole qualquer item de risco. Não é
              preciso decorar uma tabela técnica, mas é importante contar à empresa o que realmente
              sairá da obra.
            </p>
            <p>
              Essa conversa muda a contratação. Uma reforma de banheiro pode gerar cerâmica e
              argamassa, mas também embalagem de produto, pedaços de madeira, tubos, lâmpadas ou
              restos de tinta. Chamar tudo de “entulho” esconde diferenças relevantes para
              acondicionamento, transporte e destino. A Resolução CONAMA nº 307 orienta que a
              triagem seja feita preferencialmente pelo gerador na origem, ou em área licenciada
              para isso.
            </p>
            <h2>Comece antes da quebra: monte três áreas de apoio</h2>
            <p>
              Escolha um canto acessível e que não bloqueie passagem. Use sacos resistentes, caixas
              ou pequenos recipientes identificados para a separação inicial; a finalidade é
              organizar a informação e conter o material, não criar depósito improvisado. Reserve
              uma área para o material predominante, outra para recicláveis e uma terceira, isolada,
              para itens que não podem ser tratados como entulho comum.
            </p>
            <p>
              Em uma troca de piso, por exemplo, o grupo predominante tende a ser cerâmica,
              argamassa e concreto. Em uma desmontagem de armário, madeira, ferragens e embalagens
              podem representar parte importante do volume. Fotografe os montes antes de pedir
              orçamento. A imagem, junto de cidade, bairro e acesso ao imóvel, permite uma
              orientação mais fiel do que uma estimativa vaga.
            </p>
            <h2>Entenda a diferença prática entre os materiais</h2>
            <h3>Minerais: cerâmica, concreto, argamassa, tijolos e solo</h3>
            <p>
              Esses materiais costumam integrar a Classe A da CONAMA: resíduos que podem ser
              reutilizados ou reciclados como agregados, ou encaminhados a áreas próprias de
              resíduos da construção. Mantenha-os livres de lixo doméstico e de materiais perigosos.
              Se houver terra de escavação, informe isso separadamente, pois o peso e as condições
              de transporte precisam ser avaliados no atendimento.
            </p>
            <h3>
              Recicláveis para outras destinações: madeira, metais, plástico, papelão, vidro e gesso
            </h3>
            <p>
              A CETESB lista esses exemplos como Classe B. Isso não significa que qualquer mistura
              seja aceita sem confirmação: o destino depende do estado do material, da quantidade e
              da estrutura disponível. Madeira pintada, vidro quebrado, gesso e embalagens usadas
              merecem descrição específica. Em vez de empurrar tudo para o mesmo recipiente,
              pergunte qual separação ajuda a coleta planejada.
            </p>
            <h3>Itens que pedem parada e orientação</h3>
            <p>
              Tintas, solventes, óleos, vernizes, lâmpadas, baterias e materiais contaminados não
              devem entrar na caçamba como se fossem sobra mineral. A Classe D reúne resíduos
              perigosos e requer manejo conforme normas específicas. Se houver telha, caixa-d’água,
              revestimento ou outro material com suspeita de amianto, não quebre, não varra a seco e
              não o misture: a norma federal determina que resíduos com amianto sejam contidos em
              embalagens vedadas para evitar dispersão de fibras. Procure orientação especializada
              para o caso.
            </p>
            <h2>Use a separação para decidir entre PEV, LEV e retirada</h2>
            <p>
              A separação não substitui as regras locais, mas facilita escolher a rota. Em São José
              dos Campos, a Prefeitura informa PEV para pequenos geradores de até 1 m³ em pequenas
              reformas. Acima disso, a orientação é encaminhar o RCC a recicladoras ou aterros
              privados licenciados, com controle do sistema municipal. Para retirada em caçamba,
              confirme se o transportador está credenciado e quais materiais podem ser carregados.
            </p>
            <p>
              Em Jacareí, a Prefeitura informa que os LEVs recebem resíduos de pequenas obras ou
              reformas e que grandes obras ou construções devem usar tira-entulho. A página também
              diferencia o fluxo das caçambas, que deve seguir para ATT regularizada. Portanto, não
              planeje a caçamba como um atalho para descarte de qualquer objeto: volume, tipo de
              resíduo e destino precisam combinar.
            </p>
            <h2>Checklist da véspera da entrega</h2>
            <ol>
              <li>
                <strong>Liste o material predominante:</strong> por exemplo, “piso, argamassa e
                cerâmica”, em vez de apenas “resto de obra”.
              </li>
              <li>
                <strong>Avise as exceções:</strong> madeira, poda, gesso, solo, móveis, embalagens e
                qualquer item de risco devem ser mencionados antes.
              </li>
              <li>
                <strong>Confirme o espaço:</strong> veja o{` `}
                <Link href="/blog/cacamba-na-rua-ou-calcada-jacarei-sjc">
                  guia de posicionamento de caçamba
                </Link>
                {` `}
                antes de definir o ponto de entrega.
              </li>
              <li>
                <strong>Não ultrapasse a borda:</strong> a carga deve permanecer contida para
                transporte seguro.
              </li>
              <li>
                <strong>Guarde o registro:</strong> orçamento, conversa e comprovante de destinação
                ajudam a conferir o serviço depois.
              </li>
            </ol>
            <p>
              Para comparar o volume aproximado e entender quando uma solução de pequena entrega
              pode fazer sentido, consulte o{` `}
              <Link href="/guia-descarte-entulho-jacarei-sjc">
                guia de descarte de entulho em Jacareí e SJC
              </Link>
              . Quando a retirada for a opção adequada, veja{` `}
              <Link href="/aluguel-de-cacamba">aluguel de caçamba nas duas cidades</Link>,{` `}
              <Link href="/aluguel-de-cacamba-jacarei">em Jacareí</Link> ou{` `}
              <Link href="/aluguel-de-cacamba-sjc">em São José dos Campos</Link>.
            </p>
          </div>
          <section className="mt-12 rounded-2xl bg-[#111313] p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Antes de pedir
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Quer confirmar se os materiais podem ir na mesma caçamba?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie fotos, cidade, bairro e a lista do que será descartado. A equipe ajuda a
              registrar as informações certas para o pedido.
            </p>
            <CallToAction
              placement="artigo_separar_entulho_reforma"
              label="Confirmar materiais no WhatsApp"
              message={whatsappMessage}
            />
          </section>
          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">Posso misturar madeira e entulho mineral?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não presuma que sim. Informe todos os materiais antes da entrega; madeira é Classe B,
              enquanto tijolos, concreto e argamassa são normalmente Classe A.
            </p>
            <h3 className="mt-6 text-xl font-black">O que fazer com tinta, solvente ou amianto?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não misture esses itens ao entulho comum. Eles exigem orientação e destinação
              específicas; materiais com amianto devem permanecer vedados para evitar dispersão de
              fibras.
            </p>
            <h3 className="mt-6 text-xl font-black">PEV ou LEV substitui a caçamba?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Depende do volume e do serviço municipal. SJC informa PEV para pequenos geradores de
              até 1 m³; Jacareí indica LEV para pequenas obras e tira-entulho para grandes volumes.
            </p>
          </section>
          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta em 29 de julho de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              As regras e os materiais aceitos podem ser atualizados. Confirme a fonte e a
              orientação para o endereço antes da retirada.
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

SepararEntulhoReforma.Layout = AdsLanding;

export default SepararEntulhoReforma;
