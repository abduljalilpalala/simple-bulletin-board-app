import { Box, Typography } from '@mui/material'
import React from 'react'
import { APP_NAME } from '../lib/Constants'

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © ${new Date().getFullYear()} All rights reserved`}
    </Typography>
  )
}

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {APP_NAME} developed by: Abdul Jalil Palala
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer
