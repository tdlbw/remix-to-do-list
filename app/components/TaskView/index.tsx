import type { TaskWithSubtask } from '~/types/task'
import { sortByCreatedTime } from '~/helpers/sortedFunctions'

import Accordion from '../Accordion'
import UpdateCheckboxConditionForm from '../UpdateCheckboxConditionForm'
import { StyledDivider } from './styles'
import { useTranslation } from 'react-i18next'

interface TaskViewProps {
  task: TaskWithSubtask
  onAddSubTaskClick: () => void
}

export default function TaskView({ task, onAddSubTaskClick }: TaskViewProps) {
  const { t } = useTranslation('task')
  const { id: taskId, name: label, description, endDate, subTasks } = task
  const addTaskLabel = t('Add Subtask')
  const checked = Boolean(task.isEnded)
  const indeterminate = !Boolean(task.isEnded) && task.subTasks.some((subtask) => subtask.isEnded)

  return (
    <Accordion {...{ label, description, endDate, checked, indeterminate, taskId, addTaskLabel, onAddSubTaskClick }}>
      {subTasks.sort(sortByCreatedTime).map(({ name: label, id: recordId, isEnded: checked, description, endDate }) => (
        <div key={recordId}>
          <StyledDivider />
          <UpdateCheckboxConditionForm
            actionName="updateSubTask"
            {...{ recordId, checked, label, description, endDate }}
          />
        </div>
      ))}
    </Accordion>
  )
}
