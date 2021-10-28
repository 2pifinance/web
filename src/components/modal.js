import { useState } from 'react'
import Image from 'next/image'

const Modal = () => {
  const [ display, setDisplay ] = useState('block')

  return (
    <div id="new-app-modal" className="modal fade show bg-blur" tabIndex="-1" style={{ display }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-black rounded">
          <div className="modal-body p-5">
            <h1 className="modal-title h3 monospace text-center text-success mb-md-3 mx-lg-5">
              Try our new dApp version on Mumbai Testnet
            </h1>

            <button className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                    type="button" aria-label="Close" onClick={() => setDisplay('none')}>
            </button>

            <figure className="m-0 mb-md-3">
              <div style={{ margin: 'auto', maxWidth: '300px' }}>
                <Image src="/images/astronaut_in_portal.png" alt="Get in"
                       layout="responsive" width="300" height="385" unoptimized={true} />
              </div>
            </figure>

            <p className="fs-5 text-center">Provide Feedback and Earn Rewards</p>

            <div className="text-center"><LaunchButton /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

const LaunchButton = () => (
  <a className="btn btn-primary btn-gradient d-inline-flex rounded-pill border-0 px-4"
     href="https://test.2pi.network" title="Launch app">
    <figure className="me-2 mt-1 mb-n1">
      <Image src="/images/icons/rocket.svg" alt="Rocket" width="18" height="18" unoptimized={true} />
    </figure>

    Launch App
  </a>
)
