import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class TwoPiDocument extends Document {
  render() {
    const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
    const js            = `window.dataLayer = window.dataLayer || [];
                           function gtag() { dataLayer.push(arguments) };
                           gtag('js', new Date());
                           gtag('config', '${measurementId}', {
                             page_path: window.location.pathname
                           });`.trim()

    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
          <script dangerouslySetInnerHTML={{ __html: js }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
