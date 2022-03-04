import { Form } from 'remix'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import type { FormDialogI } from '~/types/formDialog'

import type { PropsWithChildren } from 'react'

export default function FormDialog({
  open,
  setOpen,
  children,
  title,
  description,
  closeText,
  submitText,
  type,
}: PropsWithChildren<FormDialogI>) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Form method="post">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button component="button" onClick={() => setOpen(false)} type="button">
            {closeText}
          </Button>
          <Button component="button" onClick={() => setOpen(false)} type="submit" name="_action" value={type}>
            {submitText}
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  )
}
