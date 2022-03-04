import DateTimePicker from '~/components/DateTimePicker'

import TextField from '@mui/material/TextField'
import type { TaskWithSubtask } from '~/types/task'
import type { Subtask } from '@prisma/client'

interface TaskFieldsProps {
  record?: TaskWithSubtask | Subtask
  taskId?: string
}

export default function TaskFields({ record, taskId }: TaskFieldsProps) {
  return (
    <>
      {record && <input type="hidden" name="recordId" value={record?.id} />}
      {taskId && <input type="hidden" name="taskId" value={taskId} />}
      <TextField
        autoFocus
        margin="dense"
        name="name"
        label="Name"
        fullWidth
        variant="standard"
        required
        defaultValue={record?.name}
      />
      <TextField
        margin="dense"
        name="description"
        label="Description"
        fullWidth
        variant="standard"
        required
        defaultValue={record?.description}
      />
      <DateTimePicker name="endDate" label="Date and time" initialValue={record?.endDate} />
    </>
  )
}
