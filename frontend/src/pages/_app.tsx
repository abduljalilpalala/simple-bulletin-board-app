import type { AppProps } from 'next/app'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextProgress from '@/utils/NextProgress'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
