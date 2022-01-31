import { Form, ActionFunction } from 'remix'
import { auth } from '~/api/utils/auth.server'

export const action: ActionFunction = async ({ request }) => {
  await auth.authenticate('sign-up', request, {
    successRedirect: '/private',
    failureRedirect: '/sign-up',
  })
}

export default function Screen() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" defaultValue="user@domain.tld" />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" defaultValue="test" />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" defaultValue="test" />
      </div>

      <button>Log In</button>
    </Form>
  )
}
