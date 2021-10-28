import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageView } from '../src/lib/ga'

import '../styles/app.scss'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      console.log('Logging page view', url)
      pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
