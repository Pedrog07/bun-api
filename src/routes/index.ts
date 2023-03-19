import setUserRoutes from './users'
import { BunServer, Router } from '../types'

export const getRouter = (app: BunServer): Router => {
  const router = app.router()
  setUserRoutes(router)
  return router
}
