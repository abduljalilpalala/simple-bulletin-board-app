import { Cancel } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

const EmptyList = (): JSX.Element => {
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '50vh', maxHeight: '800px' }}
    >
      <Cancel sx={{ height: 80, width: 80 }} color="error" />
      <Typography variant="h5" component="h2">
        Nothing to display
      </Typography>
    </Grid>
  )
}

export default EmptyList
