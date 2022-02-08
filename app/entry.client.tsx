import i18next from 'i18next'
import { hydrate } from 'react-dom'
import { initReactI18next } from 'react-i18next'
import { RemixBrowser } from 'remix'
import { RemixI18NextProvider } from 'remix-i18next'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from './material/theme'
import i18nParams from './i18n.params'

i18next
  .use(initReactI18next)
  .init(i18nParams)
  .then(() => {
    return hydrate(
      <RemixI18NextProvider i18n={i18next}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </RemixI18NextProvider>,
      document
    )
  })
