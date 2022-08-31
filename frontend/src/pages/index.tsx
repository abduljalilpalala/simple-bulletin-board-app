import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'

import Layout from '@/layouts/BulletinBoardLayout'
import EmptyList from '@/components/ArticleList/EmptyList'
import Loading from '@/components/ArticleList/Loading'
import ArticleList from '@/components/ArticleList/ArticleList'
import { useFetch } from '@/hooks/fetch'

const Articles: NextPage = () => {
  const { articles, isLoading, isValidating } = useFetch('/api/article')

  return (
    <Layout metaTitle="Articles">
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography component="h2" variant="h5">
            Articles
          </Typography>
          <NextLink href="article/create">
            <Button variant="contained" size="small">
              Create Article
            </Button>
          </NextLink>
        </Grid>
        <Divider sx={{ mt: 1 }} />
        {isLoading || isValidating ? (
          <Loading />
        ) : !articles?.length ? (
          <EmptyList />
        ) : (
          articles && <ArticleList articles={articles} />
        )}
      </Container>
    </Layout>
  )
}

export default Articles
