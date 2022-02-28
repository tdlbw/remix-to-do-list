import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

import { AppBar } from './muiStyles'

import type { PropsWithChildren } from 'react'
import type { OpenValueI } from '~/types/openValue'

export default function DefaultAppBar({ open, setOpen, children }: PropsWithChildren<OpenValueI>) {
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  )
}
