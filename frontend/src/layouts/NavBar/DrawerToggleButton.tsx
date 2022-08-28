import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { MouseEventHandler } from 'react'

type Props = {
  handleDrawerToggle: MouseEventHandler<HTMLButtonElement> | undefined
}

const DrawerToggleButton: React.FC<Props> = ({ handleDrawerToggle }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <Menu />
    </IconButton>
  )
}

export default DrawerToggleButton
