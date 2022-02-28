import DateTimePicker from '~/components/DateTimePicker'

import TextField from '@mui/material/TextField'

export default function AddTaskFields({ taskId }: { taskId?: string }) {
  return (
    <>
      {taskId && <input type="hidden" name="taskId" value={taskId} />}
      <TextField autoFocus margin="dense" name="name" label="Name" fullWidth variant="standard" required />
      <TextField margin="dense" name="description" label="Description" fullWidth variant="standard" required />
      <DateTimePicker name="endDate" label="Date and time" />
    </>
  )
}
