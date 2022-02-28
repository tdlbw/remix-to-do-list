import { db } from '~/api/utils/db.server'

export async function changeTaskIsEndedById(id: string, isEnded: boolean): Promise<void> {
  await db.task.update({
    where: { id },
    data: {
      isEnded: !isEnded,
    },
  })
}
