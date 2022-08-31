import { School } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { MouseEventHandler } from 'react'

import { navItems } from './NavItems'
import { NavItem } from '@/lib/Props'
import { APP_NAME } from '@/lib/Constants'

const DRAWER_WIDTH: number = 240

type Props = {
  window?: () => Window
  handleDrawerToggle:
    | MouseEventHandler<HTMLDivElement>
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined
  mobileOpen: boolean
}

const MobileDrawer: React.FC<Props> = (props) => {
  const { window, handleDrawerToggle, mobileOpen } = props

  const container: (() => HTMLElement) | undefined =
    window !== undefined ? () => window().document.body : undefined

  const drawer: JSX.Element = (
    <Box onClick={() => handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <School sx={{ mr: 2 }} />
          {APP_NAME}
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map(({ text }: NavItem) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default MobileDrawer
