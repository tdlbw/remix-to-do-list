import { authLoader } from '~/api/Auth/auth-loader'
import { signUpAction } from '~/api/Auth/sign-up-action'
import SignUp from '~/scenes/SignUp'

export const action = signUpAction

export const loader = authLoader

export default function SignUpPage() {
  return <SignUp />
}
