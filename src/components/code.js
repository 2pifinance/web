import { useEffect } from 'react'
import Prism from 'prismjs'

const Code = () => {
  const code = `
const fetch   = require('node-fetch')
const url     = 'https://api.2pi.network/ping'
const options = { method: 'GET', headers: { Accept: 'application/json' } }

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(error => console.error(\`Ping error: \${error}\`))
`.trim()

  useEffect(() => { Prism.highlightAll() }, [])

  return (
    <div className="small mt-lg-n4">
      <pre className="line-numbers bg-transparent scrollbar-none mt-lg-5 pt-lg-5">
        <code className="language-js">{code}</code>
      </pre>
    </div>
  )
}

export default Code
