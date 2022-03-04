import { Form, useSubmit } from 'remix'

import Checkbox from '../Checkbox'
import TaskLabel from '../TaskLabel'

import type { FormEvent } from 'react'

interface CheckboxFormProps {
  label: string
  actionType: string
  checked?: boolean
  indeterminate?: boolean
  recordId: string
  description: string
}

export default function CheckboxForm({
  label,
  actionType,
  checked = false,
  indeterminate = false,
  recordId,
  description,
}: CheckboxFormProps) {
  const submit = useSubmit()

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget)
  }
  return (
    <Form method="post" onChange={handleFormChange}>
      <Checkbox label={<TaskLabel {...{ label, description }} />} {...{ checked, indeterminate }} />
      <input type="hidden" name="_action" value={`complete${actionType}`} />
      <input type="hidden" name="isEnded" value={`${checked}`} />
      <input type="hidden" name="recordId" value={recordId} />
    </Form>
  )
}
