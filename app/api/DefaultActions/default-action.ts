import { json } from 'remix'
import { auth } from '~/api/utils/auth.server'

import type { ActionFunction } from 'remix'
import { changeSubtaskIsEndedById } from '../Subtask/change-subtask-is-ended-by-id'
import { changeTaskIsEndedById } from '../Task/change-task-is-ended-by-id'
import { addTask } from '../Task/add-task'
import { addSubtask } from '../Subtask/add-subtask'
import { deleteTask } from '../Task/delete-task'
import { deleteSubtask } from '../Subtask/delete-subtask'
import { updateTask } from '../Task/update-task'
import { updateSubtask } from '../Subtask/update-subtask'

export const defaultAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const { _action, ...values } = Object.fromEntries(formData)
  const user = await auth.isAuthenticated(request)
  let isEnded
  let id

  switch (_action) {
    case 'completeSubTask':
      isEnded = JSON.parse(values.isEnded as string)
      id = values.recordId as string
      await changeSubtaskIsEndedById(id, isEnded)
      break
    case 'completeTask':
      isEnded = JSON.parse(values.isEnded as string)
      id = values.recordId as string
      await changeTaskIsEndedById(id, isEnded)
      break
    case 'logout':
      await auth.logout(request, { redirectTo: '/sign-in' })
      break
    case 'addTask':
      user && (await addTask(user.id, values))
      break
    case 'addSubtask':
      await addSubtask(values)
      break
    case 'deleteTask':
      id = values.recordId as string
      await deleteTask(id)
      break
    case 'deleteSubTask':
      id = values.recordId as string
      await deleteSubtask(id)
      break
    case 'changeTask':
      id = values.recordId as string
      await updateTask(id, values)
      break
    case 'changeSubtask':
      id = values.recordId as string
      await updateSubtask(id, values)
      break
  }
  return json({ ok: true })
}
