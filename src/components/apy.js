import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { TwoPi } from '@2pi-network/js-sdk'

const APY = () => {
  const rpcUrl        = process.env.NEXT_PUBLIC_POLYGON_RPC_URL
  const chainId       = 137
  const [apy, setApy] = useState()

  useEffect(() => {
    const tokens   = ['dai', 'usdt', 'usdc']
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const twoPi    = new TwoPi(chainId, provider)
    const vaults   = twoPi.getVaults().filter(
      vault => tokens.includes(vault.token)
    )

    Promise.all(vaults.map(async vault => await vault.apy())).then(apys => {
      const sum = apys.reduce((total, apy) => total + apy, 0)
      const avg = (sum / apys.length) * 100

      setApy(avg.toFixed(2))
    }).catch(error => {
      console.error(error)

      setApy(15)
    })
  }, [rpcUrl])

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
