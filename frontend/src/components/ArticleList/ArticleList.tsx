import { Grid } from '@mui/material'

import { Article as TArticle } from '@/lib/Types'
import Article from '@/components/Article'

type Props = {
  articles: TArticle[] | undefined
}

const ArticleList = ({ articles }: Props): JSX.Element => {
  return (
    <Grid container item spacing={4} sx={{ py: 4 }}>
      {articles?.map((article: TArticle) => (
        <Article key={article.id} article={article} />
      ))}
    </Grid>
  )
}

export default ArticleList
