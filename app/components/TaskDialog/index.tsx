import FormDialog from '~/components/FormDialog'

import TaskFields from '../TaskFields'

import type { TaskDialogI } from '~/types/formDialog'

export default function TaskDialog({ record, taskId, ...props }: TaskDialogI) {
  return (
    <FormDialog {...props}>
      <TaskFields {...{ record, taskId }} />
    </FormDialog>
  )
}
