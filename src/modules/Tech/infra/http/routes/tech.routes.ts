import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CreateTechSchema from '../../../schemas/CreateTechSchema';
import DeleteTechSchema from '../../../schemas/DeleteTechSchema';
import TechController from '../controller/TechController';

const techRouter = Router()
const techController = new TechController()

techRouter.post(
    '',
    [celebrate({ [Segments.BODY]: CreateTechSchema }, { abortEarly: false })],
    techController.create
)

techRouter.delete(
    '',
    [celebrate({ [Segments.BODY]: DeleteTechSchema }, { abortEarly: false })],
    techController.delete
)

export default techRouter
