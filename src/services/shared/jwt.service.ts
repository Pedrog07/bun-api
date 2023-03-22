import jwt, { SignOptions } from 'jsonwebtoken'
import { CustomError } from '../../utils'

export class JwtService {
  private static SECRET = process.env.JWT_SECRET
  private static LIFETIME = parseInt(process.env.JWT_LIFETIME, 10) || 3600

  protected static signToken = (
    id: string,
    additionalPayload?: any,
    additionalSignOptions?: SignOptions
  ) => {
    return jwt.sign({ sub: id, ...additionalPayload }, this.SECRET, {
      algorithm: 'HS256',
      expiresIn: this.LIFETIME,
      ...additionalSignOptions,
    })
  }

  protected static authorize = (token: string) => {
    if (!token) throw new CustomError('Must provide authorization token')
    try {
      const result = jwt.verify(token, this.SECRET)
      return result
    } catch (error) {
      console.log(error)
    }
  }
}
