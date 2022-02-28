import type { PropsWithChildren } from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import { Drawer, DrawerHeader } from './muiStyles'

import type { OpenValueI } from '~/types/openValue'

export default function DefaultDrawer({ open, setOpen, children }: PropsWithChildren<OpenValueI>) {
  const theme = useTheme()
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
      <Divider />
    </Drawer>
  )
}
