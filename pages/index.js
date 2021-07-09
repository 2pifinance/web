import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent mt-4 pb-5">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand me-auto">
          <Image src="/images/logo.svg" alt="2pi Finance" width="149" height="24" />
        </a>
      </Link>

      <Link href="https://app.2pi.finance">
        <a className="btn btn-primary shadow-none ms-auto" title="Launch app">
          Launch app
        </a>
      </Link>
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
          2pi.finance
        </h1>

        <h2 className="h5 mb-4 mt-3 text-white fw-bold text-light">
          We build the best tools for DeFi
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <p className="mb-0">
              Let's build the next generation DeFi products to connect any legacy non crypto entrepreneur to this world. Join us, invest, and lead the revolution.
            </p>
          </div>
        </div>
      </header>

      <div className="row my-5 text-center">
        <div className="col-md-6 text-md-end d-grid d-md-block">
          <Link href="https://app.2pi.finance">
            <a className="btn btn-lg btn-primary fw-bold shadow-none px-4" title="Launch app">
              App
            </a>
          </Link>
        </div>
        <div className="col-md-6 text-md-start d-grid d-md-block mt-3 mt-md-0">
          <Link href="https://devs.2pi.finance">
            <a className="btn btn-lg btn-dark fw-bold shadow-none px-4" title="Devs API">
              Devs
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
