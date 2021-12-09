import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Meta = () => (
  <React.Fragment>
    <Head>
      <title>2PI</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="2pi" />
      <meta name="theme-color" content="#2f3a85" />

      <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" sizes="any" />
      <link rel="icon" type="image/png" href="/images/favicon.png" sizes="64x64" />
      <link rel="mask-icon" href="/images/favicon.svg" color="#000000" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      <meta property="og:local" content="en_US" />
      <meta property="og:title" content="2pi" />
      <meta property="og:description" content="2pi" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://2pi.network" />
      <meta property="og:image" content="https://2pi.network/images/logo512.png" />
    </Head>

    <Script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll" strategy="beforeInteractive" />
  </React.Fragment>
)

export default Meta
