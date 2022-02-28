import { format } from 'date-fns'
import { Form, useSubmit } from 'remix'

import EventIcon from '@mui/icons-material/Event'
import { Chip } from '@mui/material'

import Checkbox from '../Checkbox'
import TaskLabel from '../TaskLabel'
import { Wrapper } from './styles'

import type { FormEvent } from 'react'
interface UpdateCheckboxConditionFormProps {
  label: string
  actionName: string
  checked?: boolean
  indeterminate?: boolean
  recordId: string
  description: string
  endDate: Date
}

export default function UpdateCheckboxConditionForm({
  label,
  actionName,
  checked = false,
  indeterminate = false,
  recordId,
  description,
  endDate,
}: UpdateCheckboxConditionFormProps) {
  const submit = useSubmit()

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, { replace: true })
  }
  const formattedTime = format(new Date(endDate), 'dd MMM')
  return (
    <Wrapper>
      <Form method="post" onChange={handleFormChange}>
        <Checkbox label={<TaskLabel {...{ label, description }} />} {...{ checked, indeterminate }} />
        <input type="hidden" name="_action" value={actionName} />
        <input type="hidden" name="isEnded" value={`${checked}`} />
        <input type="hidden" name="recordId" value={recordId} />
      </Form>
      <Chip variant="outlined" color="warning" size="small" icon={<EventIcon />} label={formattedTime} />
    </Wrapper>
  )
}
