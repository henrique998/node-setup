import { Request, Response, Router } from 'express'

const accountRoute = Router()

accountRoute.get('/', (req: Request, res: Response) => {
  return res.send('accounts')
})

export { accountRoute as accountsRoutes }
