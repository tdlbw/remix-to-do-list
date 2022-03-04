import { Form, useSubmit } from 'remix'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'

import ButtonWithIcon from '../ButtonWithIcon'

import type { FormEvent } from 'react'
interface DeleteFormProps {
  actionType: string
  recordId: string
}

export default function DeleteForm({ actionType, recordId }: DeleteFormProps) {
  const submit = useSubmit()

  const handleFormChange = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget)
  }

  return (
    <Form method="post" onChange={handleFormChange}>
      <ButtonWithIcon color="secondary" icon={<HighlightOffIcon />} type="submit" />
      <input type="hidden" name="_action" value={`delete${actionType}`} />
      <input type="hidden" name="recordId" value={recordId} />
    </Form>
  )
}
