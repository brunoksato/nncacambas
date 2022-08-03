import { useEffect } from 'react';
import { LayoutAppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Default from '@global-layouts/Default';
import DesignSystemProvider from '@global-libs/styled-components';
import '@styles/globals.css';
import { WEB_URL } from '@configs/environment';

export default function App({ Component, pageProps }: LayoutAppProps) {
  const Layout = Component.Layout ?? Default;
  const router = useRouter();

  const pageview = (url) => {
    if (window && window.dataLayer) {
      window.dataLayer.push({
        event: `pageview`,
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={`${WEB_URL}/favicon.ico`} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#121212" />
        <link rel="apple-touch-icon" href={`${WEB_URL}/apple-touch-icon.png`} />
        <meta name="apple-mobile-web-app-title" content="" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-XXXX');
          `,
        }}
      />
      <DesignSystemProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DesignSystemProvider>
    </>
  );
}
