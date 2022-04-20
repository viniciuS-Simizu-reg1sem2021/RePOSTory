import { Router } from 'express'
import repositoryRouter from '../../../../modules/Repository/infra/http/routes/repository.routes'
import techRouter from '../../../../modules/Tech/infra/http/routes/tech.routes'

const mainRouter = Router()

mainRouter.use('/repository', repositoryRouter)
mainRouter.use('/tech', techRouter)

export default mainRouter