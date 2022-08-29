import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

import { navItems } from './NavItems'
import { NavItem } from '../../lib/Props'

const NavBarItems: React.FC = () => {
  const navigate = useRouter()

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {navItems.map(({ text, path }: NavItem) => (
        <Button
          key={text}
          sx={{ color: '#fff' }}
          onClick={() => navigate.push(path)}
        >
          {text}
        </Button>
      ))}
    </Box>
  )
}

export default NavBarItems
