import { Router } from 'express'
import { accountsRoutes } from './accounts'

const router = Router()

router.use('/accounts', accountsRoutes)

export { router as routes }
