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
  },
  {
    path: `/blog/comprovante-destinacao-entulho-jacarei-sjc`,
    image: `/assets/cacamba.webp`,
    caption: `Comprovante de destinação de entulho em Jacareí e São José dos Campos`,
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
    ({ path, image, caption }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>2026-07-23</lastmod>
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
