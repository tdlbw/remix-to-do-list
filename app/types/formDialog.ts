import type { OpenValueI } from './openValue'

export interface FormDialogI extends OpenValueI {
  title: string
  description: string
  closeText: string
  submitText: string
  formName: string
}

export interface AddTaskDialogI extends FormDialogI {
  taskId?: string
}
