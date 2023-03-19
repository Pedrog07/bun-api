import server from 'bunrest'
import { buildRouter } from './src/routes'

const app = server()

// Middleware to catch unmatches routes since currently there's no a clean way to do it with BunJs
app.use((req, res, next, err) => {
  res.status(404).json({ message: 'Route not found' })
})

buildRouter(app)

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
