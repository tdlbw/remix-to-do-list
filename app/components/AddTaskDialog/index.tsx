import FormDialog from '~/components/FormDialog'

import AddTaskFields from '../AddTaskFields'

import type { AddTaskDialogI } from '~/types/formDialog'

export default function AddTaskDialog({ taskId, ...props }: AddTaskDialogI) {
  return (
    <FormDialog {...props}>
      <AddTaskFields {...{ taskId }} />
    </FormDialog>
  )
}
