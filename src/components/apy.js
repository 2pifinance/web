import { useState } from 'react'

const APY = () => {
  const [apy, setApy] = useState()

  setTimeout(() => { setApy(15) }, 3000)

  if (apy) {
    return (
      <div className="mb-2">
        <h2 className="h2 monospace mb-0">
          {apy}%
        </h2>
      </div>
    )
  } else {
    return (
      <div className="spinner-border mb-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
}

export default APY
