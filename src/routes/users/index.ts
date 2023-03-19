import { BunServer, Router } from '../../types'
import { ErrorHandlerWrapper } from '../../utils'
import * as handlers from './users'

const setUserRoutes = (app: BunServer) => {
  const usersRouter: Router = app.router()

  app.post('/signup', ErrorHandlerWrapper(handlers.signupHandler))

  app.post('/login', ErrorHandlerWrapper(handlers.loginHandler))

  app.patch('/change-password', ErrorHandlerWrapper(handlers.changePasswordHandler))

  usersRouter.get('', ErrorHandlerWrapper(handlers.getAllUsersHandler))

  usersRouter.get('/:id', ErrorHandlerWrapper(handlers.getUserHandler))

  usersRouter.patch('/:id', ErrorHandlerWrapper(handlers.updateUserHandler))

  usersRouter.delete('/:id', ErrorHandlerWrapper(handlers.deleteUserHandler))

  app.use('/users', usersRouter)
}

export default setUserRoutes
