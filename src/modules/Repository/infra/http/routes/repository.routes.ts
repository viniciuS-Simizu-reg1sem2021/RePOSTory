import { Router } from 'express'
import RepositoryController from '../controller/repositoryController'

const repositoryRouter = Router()

repositoryRouter.get("", RepositoryController.findAll)

repositoryRouter.post("", RepositoryController.create)

repositoryRouter.put("/:id", RepositoryController.update)

repositoryRouter.delete("/:id", RepositoryController.delete)

repositoryRouter.post("/:id/like", RepositoryController.like)

export default repositoryRouter