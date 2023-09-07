import Document, { Html, Head, Main, NextScript } from "next/document";
import { render } from "react-dom";
import { ServerStyleSheet } from "styled-components";
import Script from 'next/script'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/static/images/favicon.svg"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Red+Hat+Display:wght@400;700;900&family=Urbanist:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-9GG5VV0X8J"
          ></script>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-9GG5VV0X8J');`,
            }}
          />
          <script>
            
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
