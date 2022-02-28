import { inboxPageAction } from '~/api/Inboxpage/inbox-page-action'
import { inboxPageLoader } from '~/api/Inboxpage/inbox-page-loader'
import Layout from '~/components/Layout'
import InboxPage from '~/scenes/InboxPage'

export const action = inboxPageAction

export const loader = inboxPageLoader

export default function Screen() {
  return (
    <Layout>
      <InboxPage />
    </Layout>
  )
}
