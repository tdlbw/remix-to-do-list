import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useToggle } from 'react-use'
import { useLoaderData } from 'remix'
import TaskDialog from '~/components/TaskDialog'
import TaskView from '~/components/TaskView'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { StyledButton } from './styles'

import type { TranslationI } from '~/types/formDialog'

import type { LoaderDataWithTask, TaskWithSubtask } from '~/types/task'
import type { Subtask } from '@prisma/client'

export default function InboxPage() {
  const { t } = useTranslation('task')
  const { tasks } = useLoaderData<LoaderDataWithTask>()
  const [open, setOpen] = useToggle(false)
  const [type, setType] = useState<string>('')
  const [record, setRecord] = useState<TaskWithSubtask | Subtask | undefined>()
  const [taskId, setTaskId] = useState<string | undefined>()

  const handleOpenModal = useCallback(
    (type: string, taskId?: string, subtaskId?: string) => {
      setType(type)
      const task = taskId ? tasks.find((item) => item.id === taskId) : undefined
      setTaskId(taskId)
      switch (type) {
        case 'addSubtask':
          setRecord(undefined)
          break
        case 'addTask':
          setRecord(undefined)
          break
        case 'changeTask':
          setRecord(task)
          break
        case 'changeSubtask':
          const subtask = task?.subTasks.find((item) => item.id === subtaskId)
          setRecord(subtask)
          break
      }
      setOpen(true)
    },
    [setOpen, setTaskId, setRecord]
  )

  const getTranslationByKey = (key: string): TranslationI => {
    return {
      ...t(key, { returnObjects: true }),
    }
  }

  const dialogOptions = getTranslationByKey(type)

  return (
    <>
      <StyledButton onClick={() => handleOpenModal('addTask')} startIcon={<AddCircleOutlineIcon />}>
        {t('addTaskButton')}
      </StyledButton>
      {tasks.map((task: TaskWithSubtask) => (
        <TaskView key={task.id} task={task} onOpenModal={handleOpenModal} />
      ))}
      <TaskDialog {...{ open, setOpen, record, taskId, ...dialogOptions }} />
    </>
  )
}
