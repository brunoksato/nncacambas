import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={`/favicon.ico`} />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-title" content="" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="canonical" href={`https://nncacambas.com.br`} />
          <meta property="og:title" content="NN LOCAÇÃO DE CAÇAMBAS E CAMINHÕES" />
          <meta name="robots" content="all" />
          <meta property="og:url" content={`https://nncacambas.com.br`} />
          <meta property="og:image" itemProp="image" content={`/assets/nnLogo.webp`} />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="192" />
          <meta property="og:image:height" content="192" />
          <Script
            id="gtag-base"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-NN3T3P2');
          `,
            }}
          />
          <Script
            id="gtag-gtag"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `https://www.googletagmanager.com/gtag/js?id=GTM-NN3T3P2`,
            }}
          />
          <Script
            id="gtag-gtag"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());

                gtag('config', 'GTM-NN3T3P2');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              title="gtm"
              src={`https://www.googletagmanager.com/ns.html?id=GTM-NN3T3P2`}
              height="0"
              width="0"
              style={{ display: `none`, visibility: `hidden` }}
            />
          </noscript>
        </body>
      </Html>
    );
  }
}
