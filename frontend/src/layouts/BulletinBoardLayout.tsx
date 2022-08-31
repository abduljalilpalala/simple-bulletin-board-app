import { Box } from '@mui/material'
import Head from 'next/head'
import React, { ReactNode } from 'react'

import NavBar from './NavBar'
import { APP_NAME } from '@/lib/Constants'
import Footer from './Footer'

type Props = {
  children: ReactNode
  metaTitle: string
}

const Layout: React.FC<Props> = ({ children, metaTitle }) => {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} | ${metaTitle}`}</title>
      </Head>
      <main>
        <NavBar />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </>
  )
}

export default Layout
