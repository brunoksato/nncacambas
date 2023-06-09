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
    if (window && window.dataLayer) {
      window.gtag(`event`, `page_view`, {
        page: url,
      });
    }
  };

  useEffect(() => {
    router.events.on(`routeChangeComplete`, (url) => pageview(url));
    return () => {
      router.events.off(`routeChangeComplete`, (url) => pageview(url));
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
