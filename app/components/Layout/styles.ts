import styled from 'styled-components'

import { Box, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'

export const Container = styled.div`
  height: 100%;
  height: 100%;
  position: absolute;
  width: 100%;
  x: 0;
  y: 0;
`

export const BaseGrid = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const MainBox = styled(Box)`
  display: flex;
  background-color: ${grey[200]};
  min-height: 100%;
`

export const ContentBox = styled(Box)`
  flex-grow: 1;
  padding: 24px;
`
