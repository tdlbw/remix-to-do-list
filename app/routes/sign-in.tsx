import { authLoader } from '~/api/Auth/auth-loader'
import { signInAction } from '~/api/Auth/sign-in-action'
import SignIn from '~/scenes/SignIn'

export const action = signInAction

export const loader = authLoader

export default function SignInPage() {
  return <SignIn />
}
