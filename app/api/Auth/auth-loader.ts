import { json } from 'remix'
import { sessionStorage } from '~/api/utils/session.server'
import { i18n } from '~/i18n.server'

import { auth } from '../utils/auth.server'

import type { LoaderFunction } from 'remix'

import type { LoaderData } from '~/types/loader'

export const authLoader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'))
  const error = session.get(auth.sessionErrorKey) as LoaderData['error']
  await auth.isAuthenticated(request, { successRedirect: '/' })
  const i18next = await i18n.getTranslations(request, ['registration'])
  return json<LoaderData>({ error, i18n: i18next })
}
