import { Typography } from '@mui/material'
import React from 'react'

import { APP_NAME } from '../../lib/Constants'

const AppNameNavItem: React.FC = () => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      {APP_NAME}
    </Typography>
  )
}

export default AppNameNavItem
