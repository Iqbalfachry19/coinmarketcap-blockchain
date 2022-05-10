import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://tortdzkfheda.usemoralis.com:2053/server"
      appId="HvjaZwsGwJSpzv1YDzBL9q8Pq2ba4DROiz8SVyK3"
    >
      {' '}
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
