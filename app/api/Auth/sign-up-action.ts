import type { ActionFunction } from 'remix'
import { auth } from '../utils/auth.server'

export const signUpAction: ActionFunction = async ({ request }) => {
  await auth.authenticate('sign-up', request, {
    successRedirect: '/private',
    failureRedirect: '/sign-up',
  })
}
