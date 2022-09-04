import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import theme from '../../theme'

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
