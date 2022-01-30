import { Authenticator } from 'remix-auth'
import { sessionStorage } from './session.server'
import { FormStrategy } from 'remix-auth-form'
import invariant from 'tiny-invariant'
import { hash } from 'bcrypt'
import { db } from './db.server'

export const authenticator = new Authenticator(sessionStorage)

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const saltRounds = process.env.SALT_ROUNDS ?? 0
    const email = form.get('email')
    const password = form.get('password')

    invariant(typeof email === 'string', 'email must be a string')
    invariant(email.length > 0, 'email must not be empty')

    invariant(typeof password === 'string', 'password must be a string')
    invariant(password.length > 0, 'password must not be empty')

    const encryptedPassword = await hash(password, saltRounds)

    return await db.user.findFirst({ where: { email, encryptedPassword } })
  }),
  'user-login'
)
