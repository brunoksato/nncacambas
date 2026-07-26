import Head from 'next/head';
import Link from 'next/link';
import AdsLanding from '@global-layouts/AdsLanding';
import CallToAction from '@global-components/CallToAction';
import SalesFooter from '@global-components/SalesFooter';
import SalesHeader from '@global-components/SalesHeader';

const sources = [
  {
    label: `Câmara Municipal de Jacareí — Lei Municipal nº 4.854/2005`,
    href: `https://jacarei.sp.leg.br/l_legislacao/leismun_2005/lei_4854.htm`,
  },
  {
    label: `Prefeitura de São José dos Campos — Lei Municipal nº 7.620/2008`,
    href: `https://www.sjc.sp.gov.br/legislacao/leis/2008/7620.pdf`,
  },
  {
    label: `Prefeitura de São José dos Campos — resíduos da construção civil`,
    href: `https://sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/residuo-construcao-civil/`,
  },
  {
    label: `CONAMA — Resolução nº 307/2002`,
    href: `https://conama.mma.gov.br/?id=305.&option=com_sisconama&task=arquivo.download`,
  },
] as const;

const CacambaNaRuaOuCalcada = () => {
  const title = `Caçamba na rua ou calçada: onde pode ficar em Jacareí e SJC?`;
  const description = `Veja os cuidados para posicionar uma caçamba em Jacareí e São José dos Campos, com regras locais sobre rua, calçada, esquinas e circulação.`;
  const canonical = `https://www.nncacambas.com.br/blog/cacamba-na-rua-ou-calcada-jacarei-sjc`;
  const whatsappMessage = `Olá, preciso colocar uma caçamba e quero confirmar o melhor ponto. Minha cidade, bairro, tipo de via e material são: `;
  const articleSchema = {
    '@context': `https://schema.org`,
    '@type': `Article`,
    headline: title,
    description,
    image: `https://www.nncacambas.com.br/assets/cacamba.webp`,
    datePublished: `2026-07-26`,
    dateModified: `2026-07-26`,
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
        name: `A caçamba pode ficar dentro do terreno?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Sim. Em Jacareí, a lei estabelece o terreno da obra ou do imóvel contratante como a posição preferencial quando isso for viável. Em qualquer cidade, o ponto deve permitir a operação segura de entrega e retirada.`,
        },
      },
      {
        '@type': `Question`,
        name: `Posso colocar a caçamba perto da esquina?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Não presuma que sim. As normas municipais trazem restrições para esquinas e para locais com visibilidade prejudicada. Informe o endereço e deixe a posição ser confirmada antes da entrega.`,
        },
      },
      {
        '@type': `Question`,
        name: `O que devo enviar para pedir uma caçamba?`,
        acceptedAnswer: {
          '@type': `Answer`,
          text: `Informe cidade, bairro, endereço, material predominante, uma estimativa de volume e, se possível, fotos da frente do imóvel. Isso ajuda a avaliar acesso e posicionamento.`,
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
              <span aria-hidden="true">/</span> Posição da caçamba
            </nav>
            <p className="mt-9 text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Planejamento da obra
            </p>
            <h1 className="max-w-5xl mt-4 text-4xl font-black leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Caçamba na rua ou calçada: onde pode ficar em Jacareí e SJC?
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-white/70 lg:text-xl">
              O melhor ponto é dentro do imóvel quando houver espaço. Se a caçamba precisar ficar na
              rua ou na calçada, há limites locais de circulação, visibilidade e distância de
              esquinas que devem ser checados antes da entrega.
            </p>
            <p className="mt-6 text-sm font-bold text-white/45">
              Publicado e revisado em 26 de julho de 2026 · leitura de 6 minutos
            </p>
          </div>
        </section>

        <article className="max-w-3xl px-4 py-14 mx-auto lg:px-0 lg:py-20">
          <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.02em] prose-a:text-[#5a4b00] prose-a:font-bold">
            <p className="lead">
              Antes de pedir uma caçamba, olhe a frente da obra: há espaço dentro do terreno? A rua
              permite estacionamento? A posição deixa passagem e visão suficientes? Essa conversa
              vem antes do caminhão. Ela reduz a chance de a entrega precisar ser reposicionada e
              protege pedestres, motoristas e a própria obra.
            </p>

            <h2>Comece pelo ponto mais seguro: dentro do imóvel</h2>
            <p>
              Quando a área da obra comporta o equipamento e a manobra com segurança, deixar a
              caçamba dentro do terreno costuma simplificar a convivência com a rua. A Lei Municipal
              nº 4.854/2005 de Jacareí estabelece essa como a regra enquanto for viável. Não é
              apenas uma questão de comodidade: o acesso do caminhão, portão, fiação, inclinação e
              circulação de pessoas também precisam ser avaliados.
            </p>
            <p>
              Faça uma checagem prática antes de solicitar o serviço. Meça ou fotografe a entrada,
              retire objetos que impeçam a manobra e avise se houver portão estreito, veículo
              estacionado, declive ou obra ocupando a garagem. A caçamba não deve virar obstáculo
              para a equipe, para vizinhos ou para uma saída de emergência.
            </p>

            <h2>Se for na rua: não basta haver uma vaga</h2>
            <p>
              Uma vaga livre não significa que qualquer ponto serve. Em Jacareí, quando não for
              possível usar o terreno, a lei prevê condições para a via pública: a via deve ter mais
              de 6 metros de largura, o estacionamento precisa ser permitido e a caçamba deve ficar
              paralela ao meio-fio, a 20 centímetros da guia. A norma também limita situações de
              esquina, curvas, pontos de ônibus, faixas exclusivas, áreas de pedestres, feiras e
              trechos com visibilidade prejudicada.
            </p>
            <p>
              Em São José dos Campos, a Lei Municipal nº 7.620/2008 também restringe a colocação em
              curvas, áreas de circulação exclusiva de pedestres, pontos de ônibus, vias com faixa
              exclusiva e locais onde a visualização da caçamba a 30 metros fique comprometida. A
              legislação municipal prevê ainda que a Prefeitura pode solicitar a remoção por
              interesse público.
            </p>
            <p>
              Por isso, não escolha o local só por ser o mais perto da porta. Uma caçamba mal
              posicionada pode dificultar a entrada de garagem, esconder a visão de quem sai com o
              carro ou estreitar demais uma rua. Informe o endereço completo e, se puder, mande uma
              foto feita de frente e outra no sentido da via. A confirmação deve considerar a
              condição real do local.
            </p>

            <h2>E na calçada?</h2>
            <p>
              Calçada é rota de pedestres, não extensão da obra. Ela só deve ser considerada quando
              a situação e as regras aplicáveis permitirem. Em Jacareí, para vias com menos de 6
              metros ou onde o estacionamento não é permitido, a Lei nº 4.854/2005 admite a
              disposição junto ao imóvel desde que haja posição longitudinal e faixa livre mínima de
              1 metro entre a caçamba e a guia.
            </p>
            <p>
              Em São José dos Campos, a Lei nº 7.620/2008 prevê, quando não for permitido estacionar
              na via, uma hipótese de colocação na calçada com faixa livre mínima de 0,80 metro
              entre a caçamba e a linha frontal do terreno e 0,30 metro entre a guia e a caçamba.
              Essas referências não dispensam a avaliação do endereço nem autorizam bloquear
              rebaixamentos, acessos, rampas ou a circulação. Se a passagem ficar insegura, a
              solução precisa mudar.
            </p>

            <h2>Checklist para enviar no orçamento</h2>
            <ul>
              <li>
                <strong>Cidade e bairro:</strong> Jacareí e São José dos Campos têm regras
                municipais próprias.
              </li>
              <li>
                <strong>Endereço e foto da frente:</strong> mostre guia, calçada, portão, esquina,
                postes e sinalização próximos.
              </li>
              <li>
                <strong>Local imaginado:</strong> diga se pensa em terreno, rua ou calçada; a equipe
                pode indicar outra posição.
              </li>
              <li>
                <strong>Material predominante:</strong> entulho mineral, madeira, poda ou mistura
                exigem orientação antes do descarte.
              </li>
              <li>
                <strong>Volume e período da obra:</strong> uma previsão ajuda a planejar retirada e
                evitar acúmulo fora da caçamba.
              </li>
            </ul>
            <p>
              Também combine para que a carga fique nivelada até a borda, sem coroamento. A regra
              municipal de SJC trata da carga rasa e da cobertura que evite espalhamento; na
              prática, encher além da borda aumenta o risco no transporte e pode impedir a retirada.
              Se o material encher antes, peça orientação em vez de empilhar ao redor.
            </p>

            <h2>Não confunda posição com destinação</h2>
            <p>
              Encontrar um local seguro para a caçamba é apenas uma etapa. A composição da carga e a
              destinação continuam sendo importantes. A Resolução CONAMA nº 307 estabelece
              diretrizes para resíduos da construção civil e inclui materiais como concreto,
              cerâmica, madeira, tintas e outros resíduos gerados em obras. Nem tudo deve seguir
              misturado no mesmo recipiente.
            </p>
            <p>
              Para pequenos volumes, as cidades oferecem alternativas públicas sob condições
              específicas. Em São José dos Campos, a Prefeitura informa PEVs para pequenos geradores
              de até 1 m³; em Jacareí, os LEVs são destinados a resíduos de pequenas reformas. Para
              decidir entre levar um volume pequeno ou organizar retirada, consulte o{` `}
              <Link href="/guia-descarte-entulho-jacarei-sjc">
                guia de descarte de entulho em Jacareí e SJC
              </Link>
              . Para volume maior e retirada planejada, veja as páginas de{` `}
              <Link href="/aluguel-de-cacamba">aluguel de caçamba</Link>, atendimento em{` `}
              <Link href="/aluguel-de-cacamba-jacarei">Jacareí</Link> e em{` `}
              <Link href="/aluguel-de-cacamba-sjc">São José dos Campos</Link>.
            </p>

            <h2>Exemplo: reforma de banheiro em rua estreita</h2>
            <p>
              Imagine a troca de revestimento de um banheiro em uma casa de rua estreita. Antes de
              pedir a caçamba, a pessoa pode enviar fotos do portão, da calçada, da esquina mais
              próxima e dos carros estacionados. Se houver espaço interno, esse será o primeiro
              ponto a considerar. Se não houver, é necessário verificar se a via permite
              estacionamento, se há faixa de pedestres preservada e se o local não fica em trecho
              com restrição. Só depois vale combinar entrega e tipo de resíduo.
            </p>
            <p>
              Esse planejamento curto evita duas falhas comuns: contratar uma caçamba sem local
              viável e misturar materiais sem avisar. Se restarem dúvidas, informe o cenário real
              antes da entrega — não deixe a decisão para quando o caminhão já estiver na porta.
            </p>
          </div>

          <section className="mt-12 rounded-2xl bg-[#111313] p-7 text-white md:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#fcd535]">
              Antes da entrega
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Quer confirmar o melhor ponto para a caçamba?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie cidade, bairro, foto da frente do imóvel e o material que será descartado. Assim
              a conversa já começa com o posicionamento em vista.
            </p>
            <CallToAction
              placement="artigo_posicao_cacamba"
              label="Confirmar posição pelo WhatsApp"
              message={whatsappMessage}
            />
          </section>

          <section className="mt-14 rounded-2xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-black">FAQ</h2>
            <h3 className="mt-7 text-xl font-black">A caçamba pode ficar dentro do terreno?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Sim. Em Jacareí, a lei estabelece o terreno da obra ou do imóvel contratante como a
              posição preferencial quando isso for viável. Em qualquer cidade, o ponto precisa
              permitir operação segura.
            </p>
            <h3 className="mt-6 text-xl font-black">Posso colocar a caçamba perto da esquina?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Não presuma que sim. As normas municipais restringem esquinas e locais com
              visibilidade prejudicada. Confirme o endereço e o ponto antes da entrega.
            </p>
            <h3 className="mt-6 text-xl font-black">O que devo enviar para pedir uma caçamba?</h3>
            <p className="mt-2 leading-7 text-[#5b6165]">
              Informe cidade, bairro, endereço, material predominante, volume aproximado e, se
              possível, fotos da frente do imóvel.
            </p>
          </section>

          <section className="mt-14" aria-labelledby="fontes-oficiais">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
              Consulta em 26 de julho de 2026
            </p>
            <h2 id="fontes-oficiais" className="mt-3 text-3xl font-black">
              Fontes oficiais
            </h2>
            <p className="mt-4 leading-7 text-[#5b6165]">
              Regras e serviços podem mudar. Confirme sempre a fonte oficial e as condições do
              endereço antes de agendar a entrega.
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

CacambaNaRuaOuCalcada.Layout = AdsLanding;

export default CacambaNaRuaOuCalcada;
