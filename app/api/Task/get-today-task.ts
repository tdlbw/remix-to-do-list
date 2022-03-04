import { endOfDay, startOfDay } from 'date-fns'
import { db } from '~/api/utils/db.server'

import type { TaskWithSubtask } from '~/types/task'

export async function getTodayTasks(id: string): Promise<TaskWithSubtask[]> {
  const startDate = startOfDay(new Date())
  const endDate = endOfDay(new Date())
  return await db.task.findMany({
    where: { userId: id, endDate: { gte: startDate, lte: endDate } },
    include: {
      subTasks: true,
    },
    orderBy: {
      endDate: 'asc',
    },
  })
}
