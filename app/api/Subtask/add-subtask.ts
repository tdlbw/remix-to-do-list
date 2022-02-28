import { db } from '~/api/utils/db.server'

export async function addSubtask(values: { [k: string]: FormDataEntryValue }): Promise<void> {
  await db.subtask.create({
    data: {
      name: values.name as string,
      description: values.description as string,
      endDate: values.endDate as string,
      taskId: values.taskId as string,
    },
  })
}
