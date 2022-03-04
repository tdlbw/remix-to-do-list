import { useTranslation } from 'react-i18next'
import { useToggle } from 'react-use'

import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

import DefaultAppBar from './components/DefaultAppBar'
import DefaultDrawer from './components/DefaultDrawer'
import DrawerItems from './components/DrawerItems'
import { DrawerHeader } from './muiStyles'
import { BaseGrid, Container, ContentBox, MainBox } from './styles'

import type { ReactElement } from 'react'
export const drawerWidth = 240

export default function Layout({ children }: { children: ReactElement }) {
  const [open, setOpen] = useToggle(false)
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
        <ContentBox component="main">
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
