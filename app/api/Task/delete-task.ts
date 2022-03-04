import { db } from '~/api/utils/db.server'

export async function deleteTask(id: string): Promise<void> {
  await db.task.deleteMany({
    where: { id },
  })
}
