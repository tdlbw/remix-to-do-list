import styled from 'styled-components'

import { Box, Button, Grid } from '@mui/material'

export const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 64px 32px;
`

export const ImageGrid = styled(Grid)`
  background-image: url('https://funart.pro/uploads/posts/2021-04/1617325551_55-p-oboi-ozero-braies-italiya-63.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledButton = styled(Button)`
  margin: 24px 0 16px;
`

export const Window = styled.div`
  height: 100%;
  height: 100%;
  position: absolute;
  width: 100%;
  x: 0;
  y: 0;
`

export const BaseGrid = styled(Grid)`
  height: 100%;
  width: 100%;
`
