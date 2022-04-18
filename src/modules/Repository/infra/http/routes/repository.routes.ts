import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CreateRepositorySchema from '../../../schemas/CreateRepositorySchema';
import UpdateRepositorySchema from '../../../schemas/UpdateRepositorySchema';
import RepositoryController from '../controller/RepositoryController';

const repositoryRouter = Router()
const repositoryController = new RepositoryController()

repositoryRouter.post(
    '', 
    [celebrate({ [Segments.BODY]: CreateRepositorySchema }, { abortEarly: false })], 
    repositoryController.create
)

repositoryRouter.delete(
    '/:id',
    repositoryController.delete
)

repositoryRouter.get(
    '',
    repositoryController.list
)

repositoryRouter.put(
    '/:id',
    [celebrate({ [Segments.BODY]: UpdateRepositorySchema }, { abortEarly: false })],
    repositoryController.update
)

export default repositoryRouter