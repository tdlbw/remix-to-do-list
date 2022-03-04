import { defaultAction } from '~/api/DefaultActions/default-action'
import { missingPageLoader } from '~/api/MisingPage/missing-page-loader'
import DefaultPage from '~/scenes/DefaultPage'

export const action = defaultAction

export const loader = missingPageLoader

export default function MissingPage() {
  return <DefaultPage />
}
