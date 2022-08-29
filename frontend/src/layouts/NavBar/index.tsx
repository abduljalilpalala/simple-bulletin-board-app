import { AppBar, Container, Toolbar } from '@mui/material'
import { MouseEventHandler, useState } from 'react'

import MobileDrawer from './MobileDrawer'
import DrawerToggleButton from './DrawerToggleButton'
import NavBarItems from './NavBarItems'
import AppNameNavItem from './AppNameNavItem'

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar component="nav" position="sticky" elevation={1}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <DrawerToggleButton handleDrawerToggle={handleDrawerToggle} />
          <AppNameNavItem />
          <NavBarItems />
        </Toolbar>
        <MobileDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Container>
    </AppBar>
  )
}

export default NavBar
