import { useEffect } from 'react';
import Head from 'next/head';
import HomeScreen from '@home/screens/Main';

const Orcamento = () => {
  useEffect(() => {
    window.location.href = `https://api.whatsapp.com/send?1=ptBR&phone=5512996611332&text=Olá%20quero%20solicitar%20uma%20ca%C3%A7amba`;
  }, []);

  return (
    <>
      <Head>
        <title>Aluguel de Caçambas N&N Caçambas</title>
        <meta name="title" content="Aluguel de Caçambas N&N Caçambas" />
        <meta
          name="description"
          content="A NN está sempre empenhada em um bom atendimento. Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de conservação das Caixas estacionárias. Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas, shoppings."
        />
        <meta
          property="og:description"
          content="A NN está sempre empenhada em um bom atendimento. Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de conservação das Caixas estacionárias. Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas, shoppings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nncacambas.com.br" />
        <meta property="og:title" content="Aluguel de Caçambas N&N Caçambas" />
        <meta property="og:image" content="https://nncacambas.com.br/img/nn-cacambas.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nncacambas.com.br" />
        <meta property="twitter:title" content="Aluguel de Caçambas N&N Caçambas" />
        <meta
          property="twitter:description"
          content="A NN está sempre empenhada em um bom atendimento. Possuimos uma frota de caminhões própria revisada semanalmente, as caçambas recebem uma atenção na sinalizadas conforme exigido Lei 7.620/2008, assim como com o estado de conservação das Caixas estacionárias. Temos caixas estacionarias para entulho, caixas estacionarias fechadas para empresas, shoppings."
        />
        <meta property="twitter:image" content="https://nncacambas.com.br//img/nn-cacambas.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NN Caçambas" />
        <meta
          name="keywords"
          content="aluguel de caçamba,aluguel de caçamba para entulho,locação de caçamba,tira entulho jacarei,caçamba entulho,aluguel de caçamba preço,preço de caçamba,valor de aluguel de caçamba,aluguel de caçamba sjc,caçamba entulho sjc,tira entulho telefone,aluguel de caçamba jacarei,caçamba de entulho locação,aluguel caçamba,caçamba entulho preço,tira entulho sjc,empresa de aluguel de caçamba,caçamba entulho jacarei,preço caçamba entulho,caçamba de entulho preço,aluguel de caçamba telefone,tira entulho preço"
        />
        <meta name="language" content="Portuguese" />
        <link rel="canonical" href="https://nncacambas.com.br/" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Orcamento;
