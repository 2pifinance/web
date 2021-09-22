import Image from 'next/image'
import Link from 'next/link'
import Links from '../links'
import Spaceship from '../spaceship'

const FooterSection = () => (
  <section id="footer" className="pb-3">
    <div className="container">
      <h2 className="h3 monospace text-center my-4">
        Hey DeFi user,<br />join our community
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7">
          <Spaceship />
        </div>
      </div>

      <h3 className="h4 monospace text-center mt-4">
        Ready to get started?
      </h3>

      <div className="mt-4 pb-4 text-center">
        <Link href="https://app.2pi.finance">
          <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4 ms-auto mt-n2" title="Launch app">
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

      <hr className="mt-5 mb-3" />

      <div className="row">
        <div className="col-sm text-center text-sm-start">
          <p className="small text-nowrap">
            ©2021 2PI Ltd.
          </p>
        </div>

        <div className="col-sm-auto mt-sm-n1">
          <div className="d-sm-none">
            <Links />
          </div>

          <div className="text-center text-sm-end d-none d-sm-block">
            <p className="small d-inline me-3">
              Join the community:
            </p>

            <ul className="list-inline lead d-inline">
              <li className="list-inline-item mx-2">
                <Link href="https://twitter.com/2piNetwork">
                  <a className="text-white text-decoration-none opacity-75" target="_blank" rel="noreferrer" title="Tweet us!">
                    <i className="bi-twitter"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link href="https://discord.com/invite/h8VG2XcwvT">
                  <a className="text-white text-decoration-none opacity-75" target="_blank" rel="noreferrer" title="Talk with us!">
                    <i className="bi-discord"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link href="https://2pifinance.medium.com">
                  <a className="text-white text-decoration-none opacity-75" target="_blank" rel="noreferrer" title="Read us!">
                    <i className="bi-file-text"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link href="mailto:hello@2pi.finance">
                  <a className="text-white text-decoration-none opacity-75" title="Email us!">
                    <i className="bi-envelope"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FooterSection
