import server from 'bunrest'
import { getRouter } from './src/routes'

const app = server()

const router = getRouter(app)

app.use('/users', router)

app.listen(3000, () => {
  console.log('App is listening on port 3000')
})
