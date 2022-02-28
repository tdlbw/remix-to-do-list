import type { LoaderData } from '~/types/loader'
import type { Subtask, Task } from '@prisma/client'

export interface TaskWithSubtask extends Task {
  subTasks: Subtask[]
}

export interface LoaderDataWithTask extends LoaderData {
  tasks: TaskWithSubtask[]
}
