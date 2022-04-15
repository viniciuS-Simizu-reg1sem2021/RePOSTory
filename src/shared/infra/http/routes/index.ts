import { Router } from 'express'
import repositoryRouter from '../../../../modules/Repository/infra/http/routes/repository.routes'

const mainRouter = Router()

mainRouter.use('/repository', repositoryRouter)

export default mainRouter