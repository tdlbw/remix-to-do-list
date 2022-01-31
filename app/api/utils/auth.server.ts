import { Authenticator, AuthorizationError } from 'remix-auth'
import { sessionStorage } from './session.server'
import { FormStrategy } from 'remix-auth-form'
import { hash, compare } from 'bcrypt'
import { db } from './db.server'
import { User } from '@prisma/client'

export const auth = new Authenticator<User>(sessionStorage)
const saltRounds = 10

auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email') as string
    const password = form.get('password') as string
    if (!email) throw new AuthorizationError('Email is required')
    if (!password) throw new AuthorizationError('Password is required')
    const user = await db.user.findFirst({ where: { email: email as string } })
    if (!user) throw new AuthorizationError('USer not found')
    if (!(await compare(password as string, user.encryptedPassword))) {
      throw new AuthorizationError('Invalid credentials')
    }
    return user as User
  }),
  'login'
)

auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email') as string
    const password = form.get('password') as string
    const name = form.get('name') as string
    const confirmPassword = form.get('confirmPassword') as string
    if (!email || !password || !name || !confirmPassword) throw new AuthorizationError('Fields is required')
    if (password !== confirmPassword) throw new AuthorizationError('Password not comared with confirmPassword')
    const user = await db.user.findFirst({ where: { email: email as string } })
    if (user) throw new AuthorizationError('User already exist')
    const encryptedPassword = await hash(password, saltRounds)
    const newUser = await db.user.create({ data: { email, encryptedPassword, name } })
    return newUser as User
  }),
  'sign-up'
)
