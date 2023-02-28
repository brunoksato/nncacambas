import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Blog {router?.query?.slug}</h1>
      <p>
        Questões importantes, antes de efetivar qualquer aluguel de caçamba na zona leste, com a
        Point Blue: Ao mesmo tempo que asseguramos a melhor reforma para todos os nossos clientes,
        precisamos que os mesmos estejam de acordo com alguns tópicos importantes. São eles:
        Primordialmente, o proprietário deve manter a caçamba no local pré-definido, sem alterar a
        localização da mesma! Impedir o descarte de pneus, lixos químicos, hospitalares, orgânicos,
        dentro das caçambas. Seja como for, você deve evitar de deixar a caçamba sob bueiros, pontos
        de ônibus, taxi, shoppings, bares, etc. Dessa forma, ao seguir esses tópicos, você evitará
        empecilhos que possam atrapalhar a sua obra ou seu aluguel de caçamba na zona leste! Por que
        a Point Blue é diferente dos seus concorrentes? Antes de mais nada, temos uma equipe
        eficiente e muito bem treinada em resolver todos os seus problemas. Contamos também com um
        atendimento ao cliente para tirar possíveis dúvidas e dar todo o suporte que você precisar!
        Afinal, nós da Point Blue, com toda a nossa experiência, sabemos muito bem o que você e sua
        construção precisam! Consulte-nos! Faça o seu orçamento com a Point Blue e realize agora o
        melhor aluguel de caçambas na zona leste: Entre em contato com a Point Blue agora mesmo
        clicando aqui e converse com nossa equipe via WhatsApp e conheça o melhor aluguel de caçamba
        na zona leste de São Paulo!
      </p>
    </div>
  );
};

export default Blog;
