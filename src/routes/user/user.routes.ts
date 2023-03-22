import { BunServer, Router } from '../../types'
import { ErrorHandlerWrapper, AuthorizationWrapper } from '../../utils'
import * as handlers from './user.handlers'

const setUserRoutes = (app: BunServer) => {
  const usersRouter: Router = app.router()

  app.post('/signup', ErrorHandlerWrapper(handlers.signupHandler))

  app.post('/login', ErrorHandlerWrapper(handlers.loginHandler))

  app.patch('/change-password', ErrorHandlerWrapper(handlers.changePasswordHandler))

  usersRouter.get(
    '',
    ErrorHandlerWrapper(AuthorizationWrapper(handlers.getAllUsersHandler))
  )

  usersRouter.get(
    '/:id',
    ErrorHandlerWrapper(AuthorizationWrapper(handlers.getUserHandler))
  )

  usersRouter.patch(
    '/:id',
    ErrorHandlerWrapper(AuthorizationWrapper(handlers.updateUserHandler))
  )

  usersRouter.delete(
    '/:id',
    ErrorHandlerWrapper(AuthorizationWrapper(handlers.deleteUserHandler))
  )

  app.use('/users', usersRouter)
}

export default setUserRoutes
