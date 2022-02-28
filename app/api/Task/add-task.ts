import { db } from '~/api/utils/db.server'

export async function addTask(id: string, values: { [k: string]: FormDataEntryValue }): Promise<void> {
  await db.task.create({
    data: {
      name: values.name as string,
      description: values.description as string,
      endDate: values.endDate as string,
      userId: id,
    },
  })
}
