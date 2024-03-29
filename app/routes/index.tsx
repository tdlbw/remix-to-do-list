import { defaultAction } from '~/api/DefaultActions/default-action'
import { inboxPageLoader } from '~/api/Inboxpage/inbox-page-loader'
import DefaultPage from '~/scenes/DefaultPage'

export const action = defaultAction

export const loader = inboxPageLoader

export default function InboxPage() {
  return <DefaultPage />
}
