import type { Subtask } from '@prisma/client'
import type { TaskWithSubtask } from './task'
import type { OpenValueI } from './openValue'
export interface FormDialogI extends OpenValueI {
  title: string
  description: string
  closeText: string
  submitText: string
  type: string
}

export interface TaskDialogI extends FormDialogI {
  record?: TaskWithSubtask | Subtask
  taskId?: string
}

export interface TranslationI extends Omit<TaskDialogI, 'open' | 'setOpen'> {}
