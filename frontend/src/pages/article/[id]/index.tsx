import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import MuiPaper from '@mui/material/Paper'
import { NextRouter, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { useFetch } from '@/hooks/fetch'
import Layout from '@/layouts/BulletinBoardLayout'
import Loading from '@/components/ArticleList/Loading'
import VoteButton from '@/components/VoteButton'

const Paper = styled(MuiPaper)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '20px',
  paddingBottom: '20px',
})

const ArticleDetail: React.FC = () => {
  const router: NextRouter = useRouter()

  const [id, setId] = useState<number>(0)
  const { articles, isLoading } = useFetch(id ? `/api/article/${id}` : null)
  const { title, content, votes, date } = articles || {}

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query
      setId(parseInt(id as string))
    }
  }, [router.isReady])

  return (
    <Layout metaTitle="Article Detail">
      <Container maxWidth="md">
        {isLoading ? (
          <Loading />
        ) : (
          <Paper elevation={1}>
            <Grid container>
              <Box pl={2} mb={2}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {moment(date).format('LL')}
                </Typography>
              </Box>
            </Grid>
            <Divider />
            <Box>
              <Grid container>
                <Box sx={{ width: '100%', p: '20px' }}>
                  <Typography variant="body1">{content}</Typography>
                </Box>
              </Grid>
            </Box>
            <Divider />
            <Grid container justifyContent="flex-end" pt={2} pr={2} gap={2}>
              <Grid item>
                <Typography variant="subtitle1" color="text.secondary">
                  {votes} Vote(s)
                </Typography>
              </Grid>
              <Grid item>
                <VoteButton id={id} votes={votes} />
              </Grid>
            </Grid>
          </Paper>
        )}
      </Container>
    </Layout>
  )
}

export default ArticleDetail
