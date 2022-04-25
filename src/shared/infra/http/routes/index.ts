import { Router } from 'express'
import repositoryRouter from '../../../../modules/Repository/infra/http/routes/repository.routes'
import techRouter from '../../../../modules/Tech/infra/http/routes/tech.routes'
import userRouter from '../../../../modules/User/infra/http/routes/user.routes'

const mainRouter = Router()

mainRouter.use('/repository', repositoryRouter)
mainRouter.use('/tech', techRouter)
mainRouter.use('/user', userRouter)

export default mainRouter