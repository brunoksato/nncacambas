import Head from 'next/head';
import HomeScreen from '@home/screens/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
