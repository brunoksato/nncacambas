import { useEffect } from 'react';
import { LayoutAppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Default from '@global-layouts/Default';
import DesignSystemProvider from '@global-libs/styled-components';
import '@styles/globals.css';

export default function App({ Component, pageProps }: LayoutAppProps) {
  const Layout = Component.Layout ?? Default;
  const router = useRouter();

  const pageview = (url) => {
    if (typeof window !== `undefined` && window.gtag) {
      window.gtag(`event`, `page_view`, {
        page_path: url,
      });
    }
  };

  useEffect(() => {
    const handleRouteChange = (url) => pageview(url);
    router.events.on(`routeChangeComplete`, handleRouteChange);
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NN LOCAÇÃO DE CAÇAMBAS E CAMINHÕES</title>
      </Head>
      <DesignSystemProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DesignSystemProvider>
    </>
  );
}
