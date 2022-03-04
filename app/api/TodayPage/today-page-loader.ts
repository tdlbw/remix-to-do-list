import { json } from 'remix'
import { auth } from '~/api/utils/auth.server'
import { i18n } from '~/i18n.server'

import { getTodayTasks } from '../Task/get-today-task'

import type { LoaderFunction } from 'remix'
import type { LoaderDataWithTask } from '~/types/task'

export const todayPageLoader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, {
    failureRedirect: '/sign-in',
  })
  const i18next = await i18n.getTranslations(request, ['task', 'layout'])
  const tasks = await getTodayTasks(user.id)
  return json<LoaderDataWithTask>({ error: null, i18n: i18next, tasks })
}
