import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const articles = [
  {
    href: `/blog/telhas-fibrocimento-amianto-descarte-jacarei-sjc`,
    title: `Telha de fibrocimento ou amianto: como descartar em Jacareí e SJC`,
    description: `Planeje a retirada segura de telhas e caixas d’água antigas sem misturar amianto em uma caçamba comum.`,
    date: `7 de agosto de 2026`,
  },
  {
    href: `/blog/residuos-poda-jardinagem-jacarei-sjc`,
    title: `Resíduos de poda e jardinagem: PEV, LEV ou caçamba em Jacareí e SJC?`,
    description: `Saiba onde levar galhos, folhas e restos de jardinagem e quando planejar uma retirada em caçamba.`,
    date: `4 de agosto de 2026`,
  },
  {
    href: `/blog/terra-escavacao-descarte-jacarei-sjc`,
    title: `Terra de escavação é entulho? Como planejar a retirada em Jacareí e SJC`,
    description: `Saiba como informar terra e solo de escavação e planejar a destinação sem descarte improvisado.`,
    date: `1º de agosto de 2026`,
  },
  {
    href: `/blog/separar-entulho-reforma-jacarei-sjc`,
    title: `Como separar o entulho da reforma antes de pedir caçamba`,
    description: `Organize resíduos minerais, recicláveis e itens de risco antes da retirada em Jacareí e SJC.`,
    date: `29 de julho de 2026`,
  },
  {
    href: `/blog/cacamba-na-rua-ou-calcada-jacarei-sjc`,
    title: `Caçamba na rua ou calçada: onde pode ficar em Jacareí e SJC?`,
    description: `Veja cuidados e regras locais para planejar o posicionamento da caçamba antes da entrega.`,
    date: `26 de julho de 2026`,
  },
  {
    href: `/blog/comprovante-destinacao-entulho-jacarei-sjc`,
    title: `Comprovante de destinação de entulho: como conferir em Jacareí e SJC`,
    description: `Saiba quais informações pedir à empresa e por que o registro da destinação importa na sua obra.`,
    date: `23 de julho de 2026`,
  },
  {
    href: `/blog/locacao-de-cacamba`,
    title: `Locação de caçamba em SJC e Jacareí: guia completo`,
    description: `Entenda o serviço, os resíduos e o planejamento da retirada.`,
    date: `Atualizado em 20 de julho de 2026`,
  },
  {
    href: `/blog/aluguel-de-cacamba`,
    title: `Quanto custa alugar uma caçamba em SJC e Jacareí?`,
    description: `Veja quais dados ajudam a solicitar um orçamento adequado para a obra.`,
    date: `Atualizado em 20 de julho de 2026`,
  },
];

const BlogIndex = () => {
  const title = `Conteúdos sobre caçambas e descarte de entulho`;
  const description = `Guias práticos da N&N Caçambas para planejar o descarte de resíduos de obra em Jacareí e São José dos Campos.`;
  const canonical = `https://www.nncacambas.com.br/blog`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#151719] font-inter">
      <Head>
        <title>{`${title} | N&N Caçambas`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${title} | N&N Caçambas`} />
        <meta property="og:description" content={description} />
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
              <span aria-hidden="true">/</span> Conteúdos e guias
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              N&N Caçambas
            </p>
            <h1 className="max-w-4xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Conteúdos para planejar o descarte de entulho
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              Orientações práticas e referências oficiais para obras, reformas e descarte
              responsável em Jacareí e São José dos Campos.
            </p>
          </div>
        </section>

        <section className="max-w-screen-xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.href}
                className="flex flex-col rounded-2xl border border-black/10 bg-[#f7f7f5] p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#897000]">
                  {article.date}
                </p>
                <h2 className="mt-4 text-2xl font-black leading-tight">{article.title}</h2>
                <p className="mt-4 leading-7 text-[#5b6165]">{article.description}</p>
                <Link
                  href={article.href}
                  className="mt-7 font-black text-[#5a4b00] hover:underline"
                >
                  Ler conteúdo →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SalesFooter />
    </div>
  );
};

BlogIndex.Layout = AdsLanding;

export default BlogIndex;
