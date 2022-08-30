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

import { Article as TArticle } from '../lib/Props'

type Props = {
  article: TArticle
}

const Article: React.FC<Props> = ({
  article: { id, title, content, date },
}) => {
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
          <Link component="button" variant="h5" sx={{ textDecoration: 'none' }}>
            <NextLink href={`articles/${id}`}>{title}</NextLink>
          </Link>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {moment(date).format('LL')}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="flex-end" gap={1}>
            <Button variant="contained" size="small">
              <NextLink href={`articles/${id}/edit`}>Edit</NextLink>
            </Button>
            <Button variant="contained" size="small">
              Delete
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Article
