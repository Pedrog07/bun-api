import { BunRequest, Handler } from 'bunrest/src/server/request'
import { BunResponse } from 'bunrest/src/server/response'

export class CustomError extends Error {
  constructor(message: string, readonly statusCode: number = 500) {
    super(message)
  }
}

export const ErrorHandlerWrapper = (handler: Handler) => {
  return (req: BunRequest, res: BunResponse) => {
    try {
      handler(req, res)
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message })
    }
  }
}
