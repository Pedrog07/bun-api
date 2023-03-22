import { User } from '../entities'
import { dataSource } from '../config'
import { CustomError } from '../utils'
import { JwtService } from './shared/jwt.service'
import bcrypt from 'bcryptjs'

export default class UserService extends JwtService {
  private static readonly repository = dataSource.getRepository(User)

  static signup = async ({
    email,
    password,
    username,
    country,
    phone,
    privacyOptIn,
  }: User) => {
    const user = await this.getUser(email)
    if (user)
      throw new CustomError('Oops seems like this email is already in use.', 400)

    if (!privacyOptIn) throw new CustomError('User must accept privacy opt in', 400)

    const newUser = new User()
    newUser.email = email
    newUser.password = password
    newUser.username = username
    newUser.country = country
    newUser.phone = phone
    newUser.privacyOptIn = privacyOptIn

    await this.repository.save(newUser)

    return { message: 'User successfully registered' }
  }

  static login = async (email: string, password: string) => {
    if (!email || !password) throw new CustomError('Missing information', 400)

    const user = await this.getUser(email)

    if (!user) throw new CustomError('Does not have access', 401)

    if (!bcrypt.compareSync(password, user.password))
      throw new CustomError('Invalid password', 400)

    const accessToken = this.signToken(user.id)

    return { accessToken }
  }

  static changePassword = async (email: string, newPassword: string) => {
    if (!email || !newPassword) throw new CustomError('Missing information', 400)

    const user = await this.getUser(email)

    if (!user) throw new CustomError('Does not have access', 401)

    user.password = newPassword
    await this.repository.save(user)

    return { message: 'Password changed successfully' }
  }

  private static getUser = async (email: string) =>
    await this.repository.findOne({ where: { email } })
}
