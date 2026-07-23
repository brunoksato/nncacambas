import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const sources = [
  {
    label: `Prefeitura de Jacareí — orientação sobre descarte de resíduos de construção civil`,
    href: `https://www.jacarei.sp.gov.br/meio-ambiente-orienta-sobre-descarte-de-residuos-de-construcao-civil/`,
  },
  {
    label: `Prefeitura de Jacareí — modelo de PGRCC`,
    href: `https://www.jacarei.sp.gov.br/wp-content/uploads/2023/05/PGRCC-1.pdf`,
  },
  {
    label: `Prefeitura de São José dos Campos — Sistema Eletrônico de Controle de RCC`,
    href: `https://sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/sistema-eletronico/`,
  },
  {
    label: `CONAMA — Resolução nº 307/2002`,
    href: `https://conama.mma.gov.br/?id=305.&option=com_sisconama&task=arquivo.download`,
  },
] as const;

const ComprovanteDestinacaoEntulho = () => {
  const title = `Comprovante de destinação de entulho: como conferir em Jacareí e SJC`;
  const description = `Entenda quais dados conferir no comprovante de destinação de entulho e como contratar uma caçamba com mais segurança em Jacareí e São José dos Campos.`;
  const canonical = `https://www.nncacambas.com.br/blog/comprovante-destinacao-entulho-jacarei-sjc`;
  const whatsappMessage = `Olá, estou organizando o descarte de entulho e quero confirmar a documentação e a destinação para minha obra. Cidade, bairro e material: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-07-23`,
    dateModified: `2026-07-23`,
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
        name: `O que conferir antes de pagar a retirada do entulho?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Peça a identificação da empresa, registre endereço e tipo de material e solicite o comprovante ou registro de destinação aplicável ao serviço.`,
        },
      },
      {
        '@type': `Question`,
        name: `Posso levar qualquer volume ao PEV ou LEV?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não. As regras e os materiais aceitos variam. Em São José dos Campos, a Prefeitura orienta o PEV para pequenos geradores de até 1 m³; para volume superior, indica transportador credenciado.`,
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
              {` `}
              <span aria-hidden="true">/</span>
              {` `}
              <Link href="/blog" className="font-bold text-[#fcd535] hover:underline">
                Conteúdos e guias
              </Link>
              {` `}
              <span aria-hidden="true">/</span> Comprovante de destinação
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Descarte responsável
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Comprovante de destinação de entulho: como conferir em Jacareí e SJC
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Antes de pagar pela retirada, combine por escrito o material, o endereço e a
              destinação. Em Jacareí, a orientação municipal é exigir a comprovação da entrega; em
              São José dos Campos, o controle de RCC usa registros eletrônicos e transportadores
              credenciados.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 23 de julho de 2026 · leitura de 6 minutos
            </p>
          </div>
        </section>

        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              O comprovante de destinação é o registro que ajuda a ligar o entulho retirado da sua
              obra ao local que o recebeu. Ele não substitui a análise de cada caso, mas é uma
              checagem simples antes de contratar: saiba quem transporta, o que será coletado e qual
              será o destino. Guarde a conversa, o orçamento e o documento entregue ao fim do
              serviço.
            </p>

            <h2>Por que esse documento merece atenção?</h2>
            <p>
              Entulho não é uma categoria única. Tijolos, concreto, solo, madeira, gesso, embalagens
              e materiais com risco precisam de encaminhamentos compatíveis. A Resolução CONAMA nº
              307 define diretrizes para os resíduos da construção civil e atribui responsabilidades
              aos geradores e transportadores. Na prática, misturar materiais sem aviso pode impedir
              a destinação prevista ou exigir outra solução.
            </p>
            <p>
              Em Jacareí, a Prefeitura orienta o cliente a exigir comprovação da entrega antes de
              pagar o serviço. A mesma orientação diferencia a pequena obra levada ao LEV da
              retirada de grandes volumes por tira-entulho, que deve seguir para uma ATT
              regularizada. Já em São José dos Campos, a Prefeitura mantém um sistema eletrônico
              para acompanhar geração, transporte e destino final dos RCC e disponibiliza relações
              de transportadores e destinos credenciados.
            </p>

            <h2>O que pedir antes de colocar a caçamba</h2>
            <p>
              Uma contratação bem registrada evita mal-entendidos sobre material, troca e retirada.
              No orçamento ou na conversa de atendimento, informe cidade, bairro, endereço, tipo de
              resíduo e uma estimativa de volume. Se houver mistura, descreva-a; não presuma que
              toda sobra de reforma cabe na mesma caçamba.
            </p>
            <ul>
              <li>
                <strong>Identificação do serviço:</strong> nome ou razão social da empresa, canal de
                contato, endereço da obra e data da retirada.
              </li>
              <li>
                <strong>Descrição da carga:</strong> por exemplo, cerâmica e argamassa de uma
                reforma, poda, madeira ou materiais que exigem triagem separada.
              </li>
              <li>
                <strong>Destino informado:</strong> pergunte como a empresa registra a entrega e
                solicite o comprovante aplicável quando o serviço for concluído.
              </li>
              <li>
                <strong>Condições de uso:</strong> confirme onde a caçamba ficará, se há espaço para
                operação e que a carga não deve ultrapassar a borda.
              </li>
            </ul>
            <p>
              Para uma caçamba em obra residencial, isso não significa que o cliente precise dominar
              formulários técnicos. Significa transformar uma promessa genérica de “dar destino
              certo” em informações verificáveis. Se uma foto ajuda a esclarecer o material, envie-a
              antes da entrega.
            </p>

            <h2>Jacareí: LEV, ATT e comprovação da entrega</h2>
            <p>
              Os LEVs são uma alternativa indicada pelo município para resíduos de pequenas obras ou
              reformas de imóveis residenciais e comerciais, dentro das condições aceitas pelo
              ponto. A Prefeitura informa que o material recebido ali é encaminhado para reciclagem
              municipal. Para grandes obras ou construções, a orientação é utilizar o serviço de
              tira-entulho; a publicação municipal diz que caçambeiros devem destinar o material a
              uma Área de Transbordo e Triagem (ATT) regularizada.
            </p>
            <p>
              Um exemplo comum: a troca de revestimento de um banheiro pode gerar caixas, cerâmica e
              argamassa. Antes de decidir entre levar pequenas quantidades a um LEV ou solicitar
              retirada, confira o volume, os materiais aceitos e a logística. Se for contratar, peça
              que a empresa explique qual comprovante de entrega será disponibilizado e mantenha o
              registro junto ao orçamento.
            </p>

            <h2>São José dos Campos: controle eletrônico e credenciamento</h2>
            <p>
              O portal municipal informa que pequenos geradores com até 1 m³ podem usar os PEVs,
              respeitando as condições do serviço. Acima desse volume, a orientação é contratar um
              transportador credenciado. O sistema eletrônico de controle de RCC reúne informação
              sobre geração, transporte e destino; o município também publica consultas para
              transportadores e destinos aptos.
            </p>
            <p>
              Para o cliente, a ação objetiva é conferir se a empresa indicada aparece na relação
              oficial no momento da contratação e perguntar qual registro será associado à viagem.
              Não use uma lista antiga como garantia permanente: credenciamentos podem mudar. Em uma
              reforma de cozinha com demolição de piso e bancada, avise se há itens como tinta,
              solvente, lâmpada ou outro resíduo que não deve seguir misturado ao entulho comum.
            </p>

            <h2>Quando o comprovante pode ser indispensável</h2>
            <p>
              Obras maiores, processos de aprovação e exigências técnicas podem demandar
              documentação mais detalhada. O modelo de Plano de Gerenciamento de Resíduos da
              Construção Civil (PGRCC) disponibilizado por Jacareí prevê a apresentação, por ocasião
              do Habite-se, de comprovante de destinação final emitido pelo destino de cada classe
              de resíduo. Isso é diferente de uma pequena reforma doméstica, mas mostra por que
              guardar registros desde o início é uma boa prática.
            </p>
            <p>
              Não invente um destino para “regularizar depois” e não descarte material em área sem
              autorização. Além do risco ambiental, o descarte irregular pode gerar
              responsabilização. Quando o material for perigoso, contaminado ou incerto, pare e peça
              orientação específica: uma caçamba para RCC não é solução automática para todos os
              resíduos.
            </p>

            <h2>Checklist de cinco minutos antes da retirada</h2>
            <ol>
              <li>Fotografe ou liste o material predominante.</li>
              <li>Confirme cidade, bairro e local de posicionamento.</li>
              <li>Peça o nome da empresa e, em SJC, consulte o credenciamento atualizado.</li>
              <li>Combine como será entregue o comprovante ou registro de destinação.</li>
              <li>Arquive orçamento, mensagens e comprovante junto aos documentos da obra.</li>
            </ol>
            <p>
              Se a sua dúvida é definir a melhor solução para o volume, consulte o{` `}
              <Link href="/guia-descarte-entulho-jacarei-sjc">
                guia de descarte de entulho em Jacareí e SJC
              </Link>
              . Para organizar entrega e retirada, veja as páginas de{` `}
              <Link href="/aluguel-de-cacamba">aluguel de caçamba para as duas cidades</Link>,{` `}
              <Link href="/aluguel-de-cacamba-jacarei">Jacareí</Link> e{` `}
              <Link href="/aluguel-de-cacamba-sjc">São José dos Campos</Link>.
            </p>
          </div>

          <section className="mt-12 rounded-2xl bg-[#111313] p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Antes da retirada
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Quer confirmar a documentação para o seu material?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie cidade, bairro, tipo de resíduo e uma foto, se possível. A equipe orienta o que
              informar no pedido de caçamba.
            </p>
            <CallToAction
              placement="artigo_comprovante_destinacao"
              label="Confirmar descarte no WhatsApp"
              message={whatsappMessage}
            />
          </section>

          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">O que conferir antes de pagar a retirada?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Peça a identificação da empresa, registre endereço e tipo de material e solicite o
              comprovante ou registro de destinação aplicável ao serviço.
            </p>
            <h3 className="mt-6 text-xl font-black">Posso levar qualquer volume ao PEV ou LEV?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não. As regras e os materiais aceitos variam. Em SJC, a Prefeitura orienta o PEV para
              pequenos geradores de até 1 m³; para volume superior, indica transportador
              credenciado.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta em 23 de julho de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              As informações podem ser atualizadas pelos órgãos competentes; confira a fonte antes
              de tomar uma decisão para sua obra.
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

ComprovanteDestinacaoEntulho.Layout = AdsLanding;

export default ComprovanteDestinacaoEntulho;
