import { User } from '@prisma/client'
import type { ActionFunction, LoaderFunction } from 'remix'
import { Form, json, useLoaderData } from 'remix'
import { auth } from '~/api/utils/auth.server'

type LoaderData = { email: string }

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/login' })
}

export const loader: LoaderFunction = async ({ request }) => {
  console.log({ request })
  const user = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return json<User>(user)
}

export default function Screen() {
  const { email } = useLoaderData<LoaderData>()
  return (
    <>
      <h1>Hello {email}</h1>

      <Form method="post">
        <button>Log Out</button>
      </Form>
    </>
  )
}
