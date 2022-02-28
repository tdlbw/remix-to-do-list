import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

import DefaultAppBar from './components/DefaultAppBar'
import DefaultDrawer from './components/DefaultDrawer'
import DrawerItems from './components/DrawerItems'
import { DrawerHeader } from './muiStyles'
import { BaseGrid, Container, MainBox, ContentBox } from './styles'

import type { ReactElement } from 'react'
export const drawerWidth = 240

export default function Layout({ children }: { children: ReactElement }) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('layout')
  return (
    <Container>
      <MainBox>
        <DefaultAppBar {...{ open, setOpen }}>
          <Typography variant="h6" noWrap component="div">
            {t('projectName')}
          </Typography>
        </DefaultAppBar>
        <DefaultDrawer {...{ open, setOpen }}>
          <DrawerItems />
        </DefaultDrawer>
        <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <BaseGrid container>
            <Grid item xs={12} sm={10} md={6}>
              {children}
            </Grid>
          </BaseGrid>
        </ContentBox>
      </MainBox>
    </Container>
  )
}
