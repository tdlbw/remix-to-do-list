import { json } from 'remix'
import { auth } from '~/api/utils/auth.server'

import type { ActionFunction } from 'remix'
import { changeSubtaskIsEndedById } from '../Subtask/change-subtask-is-ended-by-id'
import { changeTaskIsEndedById } from '../Task/change-task-is-ended-by-id'
import { addTask } from '../Task/add-task'
import { addSubtask } from '../Subtask/add-subtask'

export const inboxPageAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const { _action, ...values } = Object.fromEntries(formData)
  const user = await auth.isAuthenticated(request)
  let isEnded
  let id

  switch (_action) {
    case 'updateSubTask':
      isEnded = JSON.parse(values.isEnded as string)
      id = values.recordId as string
      try {
        changeSubtaskIsEndedById(id, isEnded)
      } catch (err) {
        console.log('Error', err)
      }
      break
    case 'updateTask':
      isEnded = JSON.parse(values.isEnded as string)
      id = values.recordId as string
      try {
        changeTaskIsEndedById(id, isEnded)
      } catch (err) {
        console.log('Error', err)
      }
      break
    case 'logout':
      await auth.logout(request, { redirectTo: '/sign-in' })
      break
    case 'addTask':
      try {
        user && addTask(user.id, values)
      } catch (err) {
        console.log('Error', err)
      }
      break
    case 'addSubTask':
      try {
        addSubtask(values)
      } catch (err) {
        console.log('Error', err)
      }
      break
    default:
      return json({ ok: true })
  }
  return json({ ok: true })
}
