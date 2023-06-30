//pages/sitemap.xml.js

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nncacambas.com.br/</loc>
       <loc>https://nncacambas.com.br/orcamento</loc>
       <loc>https://nncacambas.com.br/contato</loc>
       <loc>https://nncacambas.com.br/cupom</loc>
       <loc>https://nncacambas.com.br/blog/aluguel-de-cacamba</loc>
       <loc>https://nncacambas.com.br/blog/locacao-de-cacamba</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  res.setHeader(`Content-Type`, `text/xml`);
  // we send the XML to the browser
  const sitemap = generateSiteMap();
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
