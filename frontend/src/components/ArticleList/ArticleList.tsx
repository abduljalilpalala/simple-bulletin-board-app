import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material'

import { Article } from '../../lib/Props'

type Props = {
  articles: Article[]
}

const ArticleList = ({ articles }: Props) => {
  return (
    <Grid container item spacing={4} sx={{ py: 4 }}>
      {articles.map((article, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Link
                component="button"
                variant="h5"
                sx={{ textDecoration: 'none' }}
              >
                Title
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                August 29, 2022
              </Typography>
              <Typography variant="subtitle1" paragraph>
                This is a media card. You can use this section to describe the
                This is a media card. You can use this section to describe the
                content. This is a media card. You can use this section to
                describe the This is a media card. You can use this section to
                describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="flex-end" gap={1}>
                <Button variant="contained" size="small">
                  Edit
                </Button>
                <Button variant="contained" size="small">
                  Delete
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ArticleList
