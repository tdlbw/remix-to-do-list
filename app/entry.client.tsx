import i18next from 'i18next'
import { hydrate } from 'react-dom'
import { initReactI18next } from 'react-i18next'
import { RemixBrowser } from 'remix'
import { RemixI18NextProvider } from 'remix-i18next'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import i18nParams from './i18n.params'
import theme from './material/theme'

i18next
  .use(initReactI18next)
  .init(i18nParams)
  .then(() => {
    return hydrate(
      <RemixI18NextProvider i18n={i18next}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <RemixBrowser />
          </LocalizationProvider>
        </ThemeProvider>
      </RemixI18NextProvider>,
      document
    )
  })
