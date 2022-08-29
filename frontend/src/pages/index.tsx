import { Container, Divider, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'

import Layout from '../layouts/BulletinBoardLayout'
import EmptyList from '../components/ArticleList/EmptyList'
import Loading from '../components/ArticleList/Loading'
import ArticleList from '../components/ArticleList/ArticleList'
import { Article } from '../lib/Props'

const articles: Article[] = [0, 1, 2, 3, 4, 5]

const Articles: NextPage = () => {
  const [length, setLength] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Layout metaTitle="Articles">
      <Container maxWidth="lg">
        <Typography component="h2" variant="h5">
          Articles
        </Typography>
        <Divider sx={{ mt: 1 }} />
        {loading ? (
          <Loading />
        ) : !length ? (
          <EmptyList />
        ) : (
          <ArticleList articles={articles} />
        )}
      </Container>
    </Layout>
  )
}

export default Articles
