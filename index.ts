import server from 'bunrest'
import { buildRouter } from './src/routes'
import { initializeDatabase } from './src/config'

const bootstrap = async () => {
  const app = server()

  buildRouter(app)

  // Middleware to catch unmatches routes since currently there's no a clean way to do it with BunJs
  app.use((req, res, next, err) => {
    console.log(err)
    res.status(404).json({ message: 'Route not found' })
  })

  await initializeDatabase()

  app.listen(3000, () => {
    console.log('App is listening on port 3000')
  })
}

bootstrap()
