import { defaultAction } from '~/api/DefaultActions/default-action'
import { todayPageLoader } from '~/api/TodayPage/today-page-loader'
import DefaultPage from '~/scenes/DefaultPage'

export const action = defaultAction

export const loader = todayPageLoader

export default function TodayPage() {
  return <DefaultPage />
}
