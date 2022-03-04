import { startOfDay } from 'date-fns'
import { db } from '~/api/utils/db.server'

import type { TaskWithSubtask } from '~/types/task'

export async function getMissingTasks(id: string): Promise<TaskWithSubtask[]> {
  const startDate = startOfDay(new Date())
  return await db.task.findMany({
    where: { userId: id, endDate: { lt: startDate } },
    include: {
      subTasks: true,
    },
    orderBy: {
      endDate: 'asc',
    },
  })
}
