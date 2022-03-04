import { db } from '~/api/utils/db.server'

export async function deleteSubtask(id: string): Promise<void> {
  await db.subtask.delete({
    where: { id },
  })
}
