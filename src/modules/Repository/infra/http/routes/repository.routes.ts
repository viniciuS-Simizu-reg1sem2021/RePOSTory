import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CreateRepositorySchema from '../../../schemas/CreateRepositorySchema';
import RepositoryController from '../controller/RepositoryController';

const repositoryRouter = Router()
const repositoryController = new RepositoryController()

repositoryRouter.post(
    '', 
    [celebrate({ [Segments.BODY]: CreateRepositorySchema }, { abortEarly: false })], 
    repositoryController.create
)

export default repositoryRouter