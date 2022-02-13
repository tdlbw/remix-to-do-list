import { json } from 'remix'
import { auth } from '~/api/utils/auth.server'
import Layout from '~/components/Layout'

import type { LoaderData } from '~/api/types/loader'

import type { ActionFunction, LoaderFunction } from 'remix'
import { i18n } from '~/i18n.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const { _action } = Object.fromEntries(formData)
  if (_action) await auth.logout(request, { redirectTo: '/sign-in' })
  else return null
}

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, {
    failureRedirect: '/sign-in',
  })
  const i18next = await i18n.getTranslations(request, ['layout'])
  return json<LoaderData>({ error: null, i18n: i18next })
}

export default function Screen() {
  return <Layout>aza</Layout>
}
