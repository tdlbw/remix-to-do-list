import { db } from '~/api/utils/db.server'

import type { TaskWithSubtask } from '~/types/task'

export async function getAllTasks(id: string): Promise<TaskWithSubtask[]> {
  return await db.task.findMany({
    where: { userId: id },
    include: {
      subTasks: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}
