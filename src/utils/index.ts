import { BunRequest, Handler } from 'bunrest/src/server/request'
import { BunResponse } from 'bunrest/src/server/response'
import { JwtService } from '../services/shared/jwt.service'
import { HandlerWithSub } from '../types'

export class CustomError extends Error {
  constructor(message: string, readonly statusCode: number = 500) {
    super(message)
  }
}

export const ErrorHandlerWrapper = (handler: Handler) => {
  return async (req: BunRequest, res: BunResponse) => {
    try {
      await handler(req, res)
    } catch (error) {
      res.status(error.statusCode ?? 500).json({ message: error.message })
    }
  }
}

export const AuthorizationWrapper = (handler: HandlerWithSub) => {
  return async (req: BunRequest, res: BunResponse) => {
    console.log(req.headers)
    const sub = JwtService.authorize(req.headers?.authorization)
    await handler(req, res, sub)
  }
}
