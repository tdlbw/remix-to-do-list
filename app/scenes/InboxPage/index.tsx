import React from 'react'
import { useLoaderData } from 'remix'
import AddTaskDialog from '~/components/AddTaskDialog'
import TaskView from '~/components/TaskView'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import type { AddTaskDialogI } from '~/types/formDialog'

import type { LoaderDataWithTask, TaskWithSubtask } from '~/types/task'
import { StyledButton } from './styles'
import { useTranslation } from 'react-i18next'

export default function InboxPage() {
  const { t } = useTranslation('task')
  const { tasks } = useLoaderData<LoaderDataWithTask>()
  const [open, setOpen] = React.useState(false)
  const [taskId, setTaskId] = React.useState('')
  const handleAddSubTaskClick = (value: string) => {
    setTaskId(value)
    setOpen(true)
  }

  const addSubTaskObj: Omit<AddTaskDialogI, 'open' | 'setOpen'> = {
    ...t('addSubtask', { returnObjects: true }),
    formName: 'addSubTask',
  }

  const addTaskObj: Omit<AddTaskDialogI, 'open' | 'setOpen'> = {
    ...t('addTask', { returnObjects: true }),
    formName: 'addTask',
  }

  const dialogOptions = taskId ? addSubTaskObj : addTaskObj

  return (
    <>
      <StyledButton onClick={() => setOpen(true)} startIcon={<AddCircleOutlineIcon />}>
        {t('addTaskButton')}
      </StyledButton>
      {tasks.map((task: TaskWithSubtask) => (
        <TaskView key={task.id} task={task} onAddSubTaskClick={() => handleAddSubTaskClick(task.id)} />
      ))}
      <AddTaskDialog {...{ open, setOpen, taskId, ...dialogOptions }} />
    </>
  )
}
