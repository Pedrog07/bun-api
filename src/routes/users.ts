import { Router } from '../types'

const setUserRoutes = (router: Router) => {
  router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Router succeed' })
  })
}

export default setUserRoutes
