import Image from 'next/image'
import AstroboyRoll from '../astroboy/roll'
import AstroboyRide from '../astroboy/ride'
import Code from '../code'

const DevsSection = () => (
  <section id="devs">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-4 pt-5 pe-3 pe-lg-0">
          <Code />
        </div>

        <div className="col-lg-4">
          <AstroboyRoll />
        </div>

        <div className="col-lg-4 pt-lg-5 px-3 px-lg-0">
          <h3 className="h3 monospace mt-lg-5 pt-lg-4">
            For developers,<br className="d-none d-lg-block" /> by developers
          </h3>

          <p className="mb-1">
            With just a few lines of code, you can implement 2PI in an afternoon.
          </p>

          <div className="mb-1">
            <a className="text-success text-decoration-none"
               href="https://2pi.gitbook.io/2pi-documentation/"
               target="_blank" rel="noreferrer" title="Devs API">
              <div className="d-flex">
                <div className="ms-2 mt-n3 ms-n4 me-n2">
                  <Image src="/images/icons/chevron_right.svg" alt="Right" width="72" height="72" unoptimized={true} />
                </div>
                <div className="mt-1 ms-n1">
                  Read our documentation
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h2 className="h3 monospace text-center my-5">
        Start building with 2PI’s APIs!
      </h2>

      <div className="row">
        <div className="col-lg-4">
          <div className="card bg-blur border-alpha my-3">
            <div className="card-body">
              <h3 className="h3 text-success monospace">
                1.
              </h3>

              <p className="lead mb-1 fw-semi-bold">
                Client onboarding
              </p>

              <p className="mb-0">
                Get in touch with our team, who will guide you through the onboarding process.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card bg-blur border-alpha my-3">
            <div className="card-body">
              <h3 className="h3 text-success monospace">
                2.
              </h3>

              <p className="lead mb-1 fw-semi-bold">
                Account funding
              </p>

              <p className="mb-0">
                Wire funds via our partners Circle, and begin earning interest the next second.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card bg-blur border-alpha my-3">
            <div className="card-body">
              <h3 className="h3 text-success monospace">
                3.
              </h3>

              <p className="lead mb-1 fw-semi-bold">
                Account management
              </p>

              <p className="mb-0">
                End to end access management via our decentralized APIs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="h4 monospace text-center my-5">
            Make your capital work for you and start earning yield today
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <AstroboyRide />
        </div>
      </div>

      <p className="text-center mb-0">
        <a className="btn btn-primary btn-gradient rounded-pill border-0 px-4"
            href="https://2pi.gitbook.io/2pi-documentation/getting-credentials"
            target="_blank" rel="noreferrer" title="Devs API">
          Get API Keys
        </a>
      </p>

      <div className="hr w-100 my-5"></div>
    </div>
  </section>
)

export default DevsSection
