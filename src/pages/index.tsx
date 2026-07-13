import Head from 'next/head';
import AdsLanding from '@global-layouts/AdsLanding';
import HomeScreen from '@home/screens/Main';

const Home = () => {
  const description = `Aluguel de caçambas em São José dos Campos e Jacareí. Frota própria, descarte documentado e atendimento para obras, reformas e empresas desde 2007.`;
  const localBusinessSchema = {
    '@context': `https://schema.org`,
    '@type': `LocalBusiness`,
    name: `N&N Caçambas`,
    url: `https://www.nncacambas.com.br/`,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    telephone: `+55 12 99661-1332`,
    foundingDate: `2007`,
    description,
    address: {
      '@type': `PostalAddress`,
      streetAddress: `Avenida Egídio Antônio Coimbra, 739`,
      addressLocality: `Jacareí`,
      addressRegion: `SP`,
      postalCode: `12328-513`,
      addressCountry: `BR`,
    },
    areaServed: [
      { '@type': `City`, name: `São José dos Campos` },
      { '@type': `City`, name: `Jacareí` },
    ],
  };
  const faqSchema = {
    '@context': `https://schema.org`,
    '@type': `FAQPage`,
    mainEntity: [
      [
        `Quanto custa o aluguel da caçamba?`,
        `O valor depende da cidade, bairro, material e prazo. Envie essas informações pelo WhatsApp para receber o orçamento correto.`,
      ],
      [
        `Vocês atendem São José dos Campos?`,
        `Sim. A N&N atende São José dos Campos e Jacareí e possui uma única unidade física em Jacareí.`,
      ],
      [
        `A caçamba pode ficar na rua?`,
        `Depende das regras e condições do local. O endereço precisa ser informado para verificar sinalização, espaço e eventual autorização.`,
      ],
    ].map(([question, answer]) => ({
      '@type': `Question`,
      name: question,
      acceptedAnswer: { '@type': `Answer`, text: answer },
    })),
  };

  return (
    <>
      <Head>
        <title>Aluguel de Caçamba em SJC e Jacareí | N&N Caçambas</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nncacambas.com.br/" />
        <meta property="og:title" content="Aluguel de Caçamba em SJC e Jacareí | N&N Caçambas" />
        <meta property="og:image" content="https://www.nncacambas.com.br/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nncacambas.com.br/" />
        <meta
          property="twitter:title"
          content="Aluguel de Caçamba em SJC e Jacareí | N&N Caçambas"
        />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://www.nncacambas.com.br/og.png" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="author" content="NN Caçambas" />
        <link rel="canonical" href="https://www.nncacambas.com.br/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <HomeScreen />
    </>
  );
};

Home.Layout = AdsLanding;

export default Home;
