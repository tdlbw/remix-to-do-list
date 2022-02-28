import { db } from '~/api/utils/db.server'

export async function changeSubtaskIsEndedById(id: string, isEnded: boolean): Promise<void> {
  await db.subtask.update({
    where: { id },
    data: {
      isEnded: !isEnded,
    },
  })
}
