import Head from 'next/head';
import HomeScreen from '@home/screens/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home" />
        <meta name="description" content="Locação de Caçambas e de caminhões" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
