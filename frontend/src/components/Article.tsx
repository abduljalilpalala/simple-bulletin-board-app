import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import moment from 'moment'
import NextLink from 'next/link'
import { LoadingButton } from '@mui/lab'

import { Article as TArticle } from '@/lib/Props'
import { useArticles } from '@/hooks/articles'
import { MouseEventHandler } from 'react'

type Props = {
  article: TArticle
}

const Article: React.FC<Props> = ({
  article: { id, title, content, date },
}) => {
  const { confirmDeleteArticle, loading } = useArticles()

  const onDelete: MouseEventHandler<HTMLButtonElement> = () => {
    confirmDeleteArticle(id as number)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <NextLink href={`article/${id}`}>
            <Link
              component="button"
              variant="h5"
              sx={{ textDecoration: 'none' }}
            >
              {title}
            </Link>
          </NextLink>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {moment(date).format('LL')}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="flex-end" gap={1}>
            <NextLink href={`article/${id}/edit`}>
              <Button variant="contained" size="small">
                Edit
              </Button>
            </NextLink>
            <LoadingButton
              variant="contained"
              size="small"
              loading={loading}
              onClick={onDelete}
            >
              Delete
            </LoadingButton>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Article
