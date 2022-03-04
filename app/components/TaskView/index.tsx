import type { TaskWithSubtask } from '~/types/task'
import { sortByCreatedTime } from '~/helpers/sortedFunctions'

import Accordion from '../Accordion'
import UpdateCheckboxConditionForm from '../UpdateCheckboxConditionForm'
import { StyledDivider } from './styles'
import { useTranslation } from 'react-i18next'

interface TaskViewProps {
  task: TaskWithSubtask
  onOpenModal: (type: string, taskId?: string, subtaskId?: string) => void
}

export default function TaskView({ task, onOpenModal }: TaskViewProps) {
  const { t } = useTranslation('task')
  const { id: taskId, name: label, description, endDate, subTasks } = task
  const addTaskLabel = t('Add Subtask')
  const checked = Boolean(task.isEnded)
  const indeterminate = !Boolean(task.isEnded) && task.subTasks.some((subtask) => subtask.isEnded)

  return (
    <Accordion {...{ label, description, endDate, checked, indeterminate, taskId, addTaskLabel, onOpenModal }}>
      {subTasks.sort(sortByCreatedTime).map(({ name: label, id: recordId, isEnded: checked, description, endDate }) => (
        <div key={recordId}>
          <StyledDivider />
          <UpdateCheckboxConditionForm
            actionType="SubTask"
            onOpenModal={() => onOpenModal('changeSubtask', taskId, recordId)}
            {...{ recordId, checked, label, description, endDate }}
          />
        </div>
      ))}
    </Accordion>
  )
}
