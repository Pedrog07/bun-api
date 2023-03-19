import setUserRoutes from './users'
import { BunServer } from '../types'

export const buildRouter = (app: BunServer) => {
  setUserRoutes(app)
}
