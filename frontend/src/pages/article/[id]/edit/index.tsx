import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import MuiPaper from '@mui/material/Paper'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { NextRouter, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { schema } from '@/lib/schema'
import { Article } from '@/lib/Props'
import { useFetch } from '@/hooks/fetch'
import Layout from '@/layouts/BulletinBoardLayout'
import FormInput from '@/components/FormInput'
import Loading from '@/components/ArticleList/Loading'

const Paper = styled(MuiPaper)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '20px',
  paddingBottom: '20px',
})

const EditArticle: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Article>({
    resolver: yupResolver(schema),
  })

  const router: NextRouter = useRouter()
  const [id, setId] = useState<string | undefined>()

  const { articles, isLoading } = useFetch(id ? `/api/article/${id}` : null)

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query
      setId(id as string)
    }
  }, [router.isReady])

  useEffect(() => {
    if (articles) {
      const { title, content } = articles
      reset({
        title: title,
        content: content,
      })
    }
  }, [articles])

  const onSubmit = (data: Article): void => {
    // TODO: Will be adding functionality in another task
  }

  return (
    <Layout metaTitle="Create Article">
      <Container maxWidth="sm">
        <Paper elevation={1}>
          <Grid container>
            <Box pl={2} mb={2}>
              <Typography variant="h5">Edit Article</Typography>
            </Box>
          </Grid>
          <Divider />
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Grid container>
                  <Box sx={{ width: '100%', p: '20px' }}>
                    <FormInput
                      margin="normal"
                      label="Title"
                      autoFocus
                      required
                      fullWidth
                      disabled={false}
                      errors={errors?.title}
                      register={{ ...register('title') }}
                    />
                    <FormInput
                      margin="normal"
                      label="Content"
                      required
                      fullWidth
                      multiline
                      rows={10}
                      disabled={false}
                      errors={errors?.content}
                      register={{ ...register('content') }}
                    />
                  </Box>
                </Grid>
                <Divider />
                <Grid container justifyContent="flex-end">
                  <Box pt={2} pr={2}>
                    <LoadingButton
                      type="submit"
                      loading={false}
                      variant="contained"
                    >
                      Submit
                    </LoadingButton>
                  </Box>
                </Grid>
              </>
            )}
          </Box>
        </Paper>
      </Container>
    </Layout>
  )
}

export default EditArticle
