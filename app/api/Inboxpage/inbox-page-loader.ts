import { json } from 'remix'
import { auth } from '~/api/utils/auth.server'
import { i18n } from '~/i18n.server'

import { getAllTasks } from '../Task/get-all-tasks'

import type { LoaderFunction } from 'remix'
import type { LoaderDataWithTask } from '~/types/task'

export const inboxPageLoader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, {
    failureRedirect: '/sign-in',
  })
  const i18next = await i18n.getTranslations(request, ['task', 'layout'])
  const tasks = await getAllTasks(user.id)
  return json<LoaderDataWithTask>({ error: null, i18n: i18next, tasks })
}
