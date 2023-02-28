import Head from 'next/head';
import HomeScreen from '@home/screens/Main';

const Home = () => {
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
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
