import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import MuiPaper from '@mui/material/Paper'
import React from 'react'
import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Layout from '../../../layouts/BulletinBoardLayout'
import { schema } from '../../../lib/schema'
import { Article } from '../../../lib/Props'
import FormInput from '../../../components/FormInput'
import { useArticles } from '../../../hooks/articles'

const Paper = styled(MuiPaper)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingTop: '20px',
  paddingBottom: '20px',
})

const CreateArticle: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Article>({
    resolver: yupResolver(schema),
  })

  const { createArticle, loading, setLoading } = useArticles()

  const onSubmit = (data: Article): void => {
    setLoading(true)
    createArticle(data, setError)
  }

  return (
    <Layout metaTitle="Create Article">
      <Container maxWidth="sm">
        <Paper elevation={1}>
          <Grid container>
            <Box pl={2} mb={2}>
              <Typography variant="h5">Create New Article</Typography>
            </Box>
          </Grid>
          <Divider />
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Box sx={{ width: '100%', p: '20px' }}>
                <FormInput
                  margin="normal"
                  label="Title"
                  autoFocus
                  required
                  fullWidth
                  disabled={loading}
                  errors={errors?.title}
                  register={{ ...register('title') }}
                />
                <FormInput
                  margin="normal"
                  label="Content"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  disabled={loading}
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
                  loading={loading}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Layout>
  )
}

export default CreateArticle
