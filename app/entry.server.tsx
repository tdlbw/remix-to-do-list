import i18next from 'i18next'
import { renderToString } from 'react-dom/server'
import { initReactI18next } from 'react-i18next'
import { RemixServer } from 'remix'
import { RemixI18NextProvider } from 'remix-i18next'
import { ServerStyleSheet } from 'styled-components'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import i18nParams from './i18n.params'
import theme from './material/theme'

import type { EntryContext } from 'remix'
export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  await i18next.use(initReactI18next).init(i18nParams)
  const MuiRemixServer = () => (
    <RemixI18NextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <RemixServer context={remixContext} url={request.url} />
        </LocalizationProvider>
      </ThemeProvider>
    </RemixI18NextProvider>
  )
  const sheet = new ServerStyleSheet()
  let markup = renderToString(sheet.collectStyles(<MuiRemixServer />))

  const styles = sheet.getStyleTags()
  markup = markup.replace('__STYLES__', styles)

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
