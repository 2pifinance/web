import Head from 'next/head'
import Image from 'next/image'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent mt-4">
    <div className="container">
      <a className="navbar-brand me-auto" href="/">
        <Image src="/images/logo.svg" alt="2pi Finance" width="149" height="24" />
      </a>

      <a href="https://app.2pi.finance" className="btn btn-primary shadow-none ms-auto" title="Launch app">
        Launch app
      </a>
    </div>
  </nav>
)

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>2pi Finance</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="2pi Finance" />
        <meta name="theme-color" content="#0f80aa" />

        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="64x64" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:local" content="en_US" />
        <meta property="og:title" content="2pi Finance" />
        <meta property="og:description" content="2pi Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2pi.finance" />
        <meta property="og:image" content="https://2pi.finance/images/logo512.png" />
      </Head>

      <Header />

      <header className="mt-5 pt-5 text-center">
        <h1 className="h1 text-white fw-bold mt-5 mb-2">
          Welcome to 2pi.finance
        </h1>

        <h2 className="h4 mb-4 text-white fw-bold text-light">
          We build the best tools for DeFi
        </h2>
      </header>

      <p className="my-5 pt-5 text-center">
        <a href="https://app.2pi.finance" className="btn btn-lg btn-primary fw-bold shadow-none me-3" title="Launch app">
          Launch app
        </a>
        <a href="https://devs.2pi.finance" className="btn btn-lg btn-info fw-bold shadow-none ms-3" title="Devs API">
          Devs API
        </a>
      </p>
    </div>
  )
}
