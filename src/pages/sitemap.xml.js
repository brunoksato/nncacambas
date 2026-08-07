const siteUrl = `https://www.nncacambas.com.br`;

const pages = [
  {
    path: `/`,
    image: `/assets/nnCacambas_caminhao.webp`,
    caption: `Caminhão e caçambas da N&N Caçambas`,
  },
  {
    path: `/aluguel-de-cacamba`,
    image: `/assets/cacamba.webp`,
    caption: `Aluguel de caçamba em SJC e Jacareí`,
  },
  {
    path: `/aluguel-de-cacamba-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Aluguel de caçamba em São José dos Campos`,
  },
  {
    path: `/aluguel-de-cacamba-jacarei`,
    image: `/assets/cacamba.webp`,
    caption: `Aluguel de caçamba em Jacareí`,
  },
  {
    path: `/aluguel-de-caminhao-para-empresas`,
    image: `/assets/caminhao3.webp`,
    caption: `Caminhões sem motorista para empresas em São José dos Campos e Jacareí`,
  },
  {
    path: `/blog/aluguel-de-cacamba`,
    image: `/assets/cacamba.webp`,
    caption: `Caçamba estacionária para entulho de obra`,
  },
  {
    path: `/blog/locacao-de-cacamba`,
    image: `/assets/grupoCacambas.webp`,
    caption: `Grupo de caçambas estacionárias`,
  },
  {
    path: `/blog`,
    image: `/assets/grupoCacambas.webp`,
    caption: `Conteúdos sobre caçambas e descarte de entulho`,
    lastmod: `2026-08-04`,
  },
  {
    path: `/blog/comprovante-destinacao-entulho-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Comprovante de destinação de entulho em Jacareí e São José dos Campos`,
  },
  {
    path: `/blog/cacamba-na-rua-ou-calcada-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Posicionamento de caçamba em Jacareí e São José dos Campos`,
  },
  {
    path: `/blog/separar-entulho-reforma-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Separação de entulho de reforma em Jacareí e São José dos Campos`,
  },
  {
    path: `/blog/terra-escavacao-descarte-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Planejamento da retirada de terra de escavação em Jacareí e São José dos Campos`,
  },
  {
    path: `/blog/residuos-poda-jardinagem-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Resíduos de poda e jardinagem em Jacareí e São José dos Campos`,
    lastmod: `2026-08-04`,
  },
  {
    path: `/blog/telhas-fibrocimento-amianto-descarte-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Descarte de telhas de fibrocimento e amianto em Jacareí e São José dos Campos`,
    lastmod: `2026-08-07`,
  },
  {
    path: `/guia-descarte-entulho-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Guia de descarte de entulho em Jacareí e São José dos Campos`,
  },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    ({ path, image, caption, lastmod = `2026-07-30` }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <image:image>
      <image:loc>${siteUrl}${image}</image:loc>
      <image:caption>${caption}</image:caption>
    </image:image>
  </url>`,
  )
  .join(`\n`)}
</urlset>`;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader(`Content-Type`, `text/xml`);
  res.setHeader(`Cache-Control`, `public, s-maxage=86400, stale-while-revalidate=43200`);
  res.write(generateSiteMap());
  res.end();

  return { props: {} };
}

export default SiteMap;
