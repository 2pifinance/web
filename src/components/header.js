import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Links from './links'

const Header = () => {
  const goToDelayedLocation = event => {
    const link = event.target

    setTimeout(() => {
      window.location = link.href
    }, 400)
  }

  useEffect(() => {
    require('bootstrap/js/dist/dropdown')
    require('bootstrap/js/dist/offcanvas')
  }, [])

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pb-5">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand me-auto mt-n2 ms-n4 d-none d-lg-inline">
              <Image src="/images/logo.svg" alt="2pi" width="136" height="108" unoptimized={true} />
            </a>
          </Link>
          <Link href="/">
            <a className="navbar-brand me-auto ms-n3 d-lg-none">
              <Image src="/images/logo.svg" alt="2pi" width="95" height="76" unoptimized={true} />
            </a>
          </Link>

          <button className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menu"
                  aria-controls="menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#main">
                  <a className="nav-link" title="Products">
                    Products
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#devs">
                  <a className="nav-link" title="For Developers">
                    For Developers
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#footer">
                  <a className="nav-link" title="For DeFi Users">
                    For DeFi Users
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link href="#">
                  <a id="community-menu"
                     className="nav-link"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                     title="Community">
                    <div className="d-flex">
                      <div>
                        Community
                      </div>
                      <div className="ms-2 pt-1">
                        <Image src="/images/icons/chevron_down.svg" alt="Down" width="16" height="16" unoptimized={true} />
                      </div>
                    </div>
                  </a>
                </Link>

                <ul className="dropdown-menu bg-blur border-alpha text-end dropdown-menu-end" aria-labelledby="community-menu">
                  <li>
                    <Link href="https://twitter.com/2piNetwork">
                      <a className="dropdown-item" target="_blank">
                        Twitter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.com/invite/h8VG2XcwvT">
                      <a className="dropdown-item" target="_blank">
                        Discord
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://2pifinance.medium.com/">
                      <a className="dropdown-item" target="_blank">
                        Medium
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://docs.2pi.network/">
                      <a className="dropdown-item" target="_blank">
                        Docs
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <Link href="https://app.2pi.network">
              <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4 ms-3 mt-n2" title="Launch app">
                <div className="d-flex">
                  <div className="me-2 mt-1 mb-n1">
                    <Image src="/images/icons/rocket.svg" alt="Rocket" width="18" height="18" unoptimized={true} />
                  </div>
                  <div>
                    Launch App
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-top bg-blur h-100" tabIndex="-1" id="menu">
        <div className="offcanvas-header pt-5">
          <button type="button" className="btn-close btn-close-white ms-auto me-4" data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="container text-center mt-5 pt-5">
            <p className="mb-0" data-bs-dismiss="offcanvas" data-bs-target="#menu">
              <Link href="#main">
                <a className="d-block text-white text-decoration-none py-3"
                   title="Products"
                   data-bs-dismiss="offcanvas"
                   data-bs-target="#menu"
                   onClick={goToDelayedLocation}>
                  Products
                </a>
              </Link>
            </p>

            <hr className="my-0" />

            <p className="mb-0" data-bs-dismiss="offcanvas" data-bs-target="#menu">
              <Link href="#devs">
                <a className="d-block text-white text-decoration-none py-3"
                   title="For Developers"
                   data-bs-dismiss="offcanvas"
                   data-bs-target="#menu"
                   onClick={goToDelayedLocation}>
                  For Developers
                </a>
              </Link>
            </p>

            <hr className="my-0" />

            <p className="mb-0">
              <Link href="#footer">
                <a className="d-block text-white text-decoration-none py-3"
                   title="For DeFi Users"
                   data-bs-dismiss="offcanvas"
                   data-bs-target="#menu"
                   onClick={goToDelayedLocation}>
                  For DeFi Users
                </a>
              </Link>
            </p>

            <hr className="my-0" />

            <div data-bs-dismiss="offcanvas" data-bs-target="#menu">
              <Link href="https://app.2pi.network">
                <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4 mt-4" title="Launch app">
                  <div className="d-flex">
                    <div className="me-2 mt-1 mb-n1">
                      <Image src="/images/icons/rocket.svg" alt="Rocket" width="18" height="18" unoptimized={true} />
                    </div>
                    <div>
                      Launch App
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="fixed-bottom pb-4">
              <div className="container">
                <hr />

                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
