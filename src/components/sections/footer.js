import Link from 'next/link'
import Spaceship from '../spaceship'

const FooterSection = () => (
  <section id="footer" className="pb-3">
    <div className="container">
      <h2 className="h2 monospace text-center my-4">
        Hey DeFi User, Join our community
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Spaceship />
        </div>
      </div>

      <h3 className="h4 monospace text-center my-4">
        Ready to get started?
      </h3>

      <p className="my-3 text-center">
        <Link href="https://app.2pi.finance">
          <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4 ms-auto mt-n2" title="Launch app">
            Launch App
          </a>
        </Link>
      </p>

      <hr className="mt-5 mb-3" />

      <div className="row">
        <div className="col">
          <p className="small text-muted">
            ©2021 2PI Ltd.
          </p>
        </div>

        <div className="col-auto text-right">
          <p className="small text-muted d-inline me-3">
            Join the community:
          </p>

          <ul className="list-inline lead d-inline">
            <li className="list-inline-item mx-2">
              <Link href="https://twitter.com/2piFinance">
                <a className="text-muted text-decoration-none" target="_blank" rel="noreferrer" title="Tweet us!">
                  <i className="bi-twitter"></i>
                </a>
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link href="https://discord.com/invite/h8VG2XcwvT">
                <a className="text-muted text-decoration-none" target="_blank" rel="noreferrer" title="Talk with us!">
                  <i className="bi-discord"></i>
                </a>
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link href="https://2pifinance.medium.com">
                <a className="text-muted text-decoration-none" target="_blank" rel="noreferrer" title="Read us!">
                  <i className="bi-file-text"></i>
                </a>
              </Link>
            </li>
            <li className="list-inline-item mx-2">
              <Link href="mailto:hello@2pi.finance">
                <a className="text-muted text-decoration-none" title="Email us!">
                  <i className="bi-envelope"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default FooterSection
