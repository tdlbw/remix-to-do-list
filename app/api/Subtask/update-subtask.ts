import { db } from '~/api/utils/db.server'

export async function updateSubtask(id: string, values: { [k: string]: FormDataEntryValue }): Promise<void> {
  await db.subtask.update({
    where: { id },
    data: {
      name: values.name as string,
      description: values.description as string,
      endDate: values.endDate as string,
    },
  })
}
