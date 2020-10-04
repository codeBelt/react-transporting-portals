import '../styles/globals.scss'

import React from 'react'
import {AppProps} from 'next/app';

function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default NextApp
