import https from 'node:https';

const DEFAULT_DOMAINS = [
  `nncacambas.com.br`,
  `luketacacambas.com.br`,
  `uniaocacambasjacarei.com.br`,
  `cacambadeentulhojacarei.com`,
];

const domains = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_DOMAINS;
const apiKey = process.env.AHREFS_API_KEY;

function requestDomainRating(domain) {
  const url = new URL(`https://api.ahrefs.com/v3/public/domain-rating-free`);
  url.searchParams.set(`target`, domain);
  url.searchParams.set(`output`, `json`);

  return new Promise((resolve, reject) => {
    const headers = { Accept: `application/json` };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

    https
      .get(url, { headers }, (response) => {
        let body = ``;
        response.setEncoding(`utf8`);
        response.on(`data`, (chunk) => {
          body += chunk;
        });
        response.on(`end`, () => {
          try {
            const data = JSON.parse(body);
            const value = data?.domain_rating?.domain_rating;

            if (response.statusCode !== 200 || typeof value !== `number`) {
              reject(new Error(`${domain}: ${data?.error || `HTTP ${response.statusCode}`}`));
              return;
            }

            resolve({ domain, domainRating: value });
          } catch (error) {
            reject(new Error(`${domain}: resposta inválida da API (${error.message})`));
          }
        });
      })
      .on(`error`, reject);
  });
}

const results = await Promise.all(domains.map(requestDomainRating));
console.table(results);
console.log(`Domain Rating by Ahrefs — https://ahrefs.com/`);

if (!apiKey) {
  console.log(
    `Aviso: defina AHREFS_API_KEY antes de 10/08/2026, quando a API pública passará a exigir uma chave gratuita.`,
  );
}
