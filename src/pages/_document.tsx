import Document, { Html, Head, Main, NextScript } from 'next/document';
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              title="gtm"
              src={`https://www.googletagmanager.com/ns.html?id=G-57G1RR67ND`}
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
