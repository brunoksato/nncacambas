const siteUrl = `https://www.nncacambas.com.br`;

const pages = [
  `/`,
  `/aluguel-de-cacamba-sjc`,
  `/aluguel-de-cacamba-jacarei`,
  `/blog/aluguel-de-cacamba`,
  `/blog/locacao-de-cacamba`,
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
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
