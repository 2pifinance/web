import React from 'react'
import Link from 'next/link'

const Header = () => (
  <React.Fragment>
    <p className="mb-2 small text-center opacity-75">
      Join the community:
    </p>

    <div className="d-flex justify-content-center pb-2">
      <div className="mx-4">
        <Link href="https://twitter.com/2piFinance">
          <a className="h2 text-white text-decoration-none" target="_blank" rel="noreferrer" title="Tweet us!">
            <i className="bi-twitter"></i>
          </a>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="https://discord.com/invite/h8VG2XcwvT">
          <a className="h2 text-white text-decoration-none" target="_blank" rel="noreferrer" title="Talk with us!">
            <i className="bi-discord"></i>
          </a>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="https://2pifinance.medium.com">
          <a className="h2 text-white text-decoration-none" target="_blank" rel="noreferrer" title="Read us!">
            <i className="bi-file-text"></i>
          </a>
        </Link>
      </div>

      <div className="mx-4">
        <Link href="mailto:hello@2pi.finance">
          <a className="h2 text-white text-decoration-none" title="Email us!">
            <i className="bi-envelope"></i>
          </a>
        </Link>
      </div>
    </div>
  </React.Fragment>
)

export default Header
