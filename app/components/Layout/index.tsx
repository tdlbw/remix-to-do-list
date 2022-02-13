import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import DefaultAppBar from './components/DefaultAppBar'
import DefaultDrawer from './components/DefaultDrawer'
import DrawerItems from './components/DrawerItems'
import { DrawerHeader } from './muiStyles'

import type { ReactElement } from 'react'
export const drawerWidth = 240

export default function Layout({ children }: { children: ReactElement | string }) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('layout')
  return (
    <Box sx={{ display: 'flex' }}>
      <DefaultAppBar {...{ open, setOpen }}>
        <Typography variant="h6" noWrap component="div">
          {t('projectName')}
        </Typography>
      </DefaultAppBar>
      <DefaultDrawer {...{ open, setOpen }}>
        <DrawerItems />
      </DefaultDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}
