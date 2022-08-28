import { Box, Button } from '@mui/material'
import { navItems } from './NavItems'
import { NavItem } from '../../lib/Props'

const NavBarItems: React.FC = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map(({ text }: NavItem) => (
        <Button key={text} sx={{ color: '#fff' }}>
          {text}
        </Button>
      ))}
    </Box>
  )
}

export default NavBarItems
