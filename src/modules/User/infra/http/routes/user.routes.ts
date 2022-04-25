import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CreateUserSchema from '../../../schemas/CreateUserSchema';
import UpdateUserSchema from '../../../schemas/UpdateUserSchema';
import UserController from '../controller/UserController';

const userRouter = Router()
const userController = new UserController()

userRouter.post(
    '',
    [celebrate({ [Segments.BODY]: CreateUserSchema }, { abortEarly: false })],
    userController.create
)

userRouter.delete(
    '/:id',
    userController.delete
)

userRouter.put(
    '/:id',
    [celebrate({ [Segments.BODY]: UpdateUserSchema }, { abortEarly: false })],
    userController.update
)

userRouter.get(
    '/profile/:id',
    userController.findByUsernameOrEmail
)

userRouter.get(
    '/:id',
    userController.findById
)
    
export default userRouter