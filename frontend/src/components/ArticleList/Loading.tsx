import { CircularProgress, Grid } from '@mui/material'

const Loading = (): JSX.Element => {
  return (
    <Grid
      item
      justifyContent="center"
      alignItems="center"
      container
      direction="column"
      sx={{ height: '50vh', maxHeight: '800px' }}
    >
      <CircularProgress />
    </Grid>
  )
}

export default Loading
