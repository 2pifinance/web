import React from 'react'
import Link from 'next/link'

const Links = () => (
  <React.Fragment>
    <p className="small text-center opacity-75 mb-3">
      Join the community:
    </p>

    <div className="d-flex justify-content-center pb-2">
      <a className="h2 text-white mx-3" title="Tweet us!"
         href="https://twitter.com/2piNetwork" target="_blank" rel="noreferrer">
        <i className="bi-twitter"></i>
      </a>

      <a className="h2 text-white mx-3" title="Talk with us!"
         href="https://discord.com/invite/h8VG2XcwvT" target="_blank" rel="noreferrer">
        <i className="bi-discord"></i>
      </a>

      <a className="h2 text-white mx-3" title="Read us!"
         href="https://2pinetwork.medium.com" target="_blank" rel="noreferrer">
        <i className="bi-medium"></i>
      </a>

      <a className="h2 text-white mx-3" title="Inspect us!"
         href="https://github.com/2pinetwork" target="_blank" rel="noreferrer">
        <i className="bi-github"></i>
      </a>

      <a className="h2 text-white mx-3" title="Learn with us!"
         href="https://docs.2pi.network" target="_blank" rel="noreferrer" >
        <i className="bi-file-text"></i>
      </a>

      <a className="h2 text-white mx-3" title="Report issues!"
         href="https://github.com/2pinetwork/security/blob/master/bug-bounty.md" target="_blank" rel="noreferrer" >
        <i className="bi-bug"></i>
      </a>
    </div>
  </React.Fragment>
)

export default Links
