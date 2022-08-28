import { Container } from '@mui/material'
import { NextPage } from 'next'

import Layout from '../layouts/BulletinBoardLayout'

const Articles: NextPage = () => {
  return (
    <Layout metaTitle="Articles">
      <Container maxWidth="lg">Articles</Container>
    </Layout>
  )
}

export default Articles
