import { json, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { useRemixI18Next } from 'remix-i18next'

import { i18n } from './i18n.server'

import type { MetaFunction } from 'remix'
export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request)
  return json({ locale })
}

export default function App(): React.ReactElement {
  const { locale } = useLoaderData<{ locale: string }>()
  useRemixI18Next(locale)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
