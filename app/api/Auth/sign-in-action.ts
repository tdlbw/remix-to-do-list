import type { ActionFunction } from 'remix'
import { auth } from '../utils/auth.server'

export const signInAction: ActionFunction = async ({ request }) => {
  await auth.authenticate('sign-in', request, {
    successRedirect: '/private',
    failureRedirect: '/sign-in',
  })
}
