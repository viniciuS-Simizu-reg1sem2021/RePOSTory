import { Request, Response, NextFunction } from 'express';
import { container, injectable } from "tsyringe";
import { v4 as uuid } from 'uuid'
import CreateUserService from '../../../services/CreateUserService';
import FindByIdUserService from '../../../services/FindByIdUserService';
import FindByUsernameOrEmailUserService from '../../../services/FindByUsernameOrEmailUserService';
import UpdateUserService from '../../../services/UpdateUserService';

function handleError(description: string) {
    return {
        description: description,
        date: Date().toString()
    }
}

@injectable()
export default class UserController {

    async create(request: Request, response: Response, next: NextFunction) {

        try {

            const body = request.body

            // Quick verify if username or email already exists
            const findService = container.resolve(FindByUsernameOrEmailUserService)
            await findService.execute({ username: body.username }) && response.status(406).send(handleError('username already exists'))
            await findService.execute({ email: body.email }) && response.status(406).send(handleError('email already exists'))
            
            const bcrypt = require('bcrypt')
            const createService = container.resolve(CreateUserService)

            body.id_user = await uuid()
            body.password = await bcrypt.hash(body.password, parseInt(process.env['SALTROUNDS']))

            response.status(200).json(await createService.execute(body))

        } catch (e) {
            next(e)
        }

    }

    async update(request: Request, response: Response, next: NextFunction) {

        try {
            
            const service = container.resolve(UpdateUserService)
            const id_user = request.params.id
            const body = request.body

            if(body.password) {
                const bcrypt = require('bcrypt')
                body.password = await bcrypt.hash(body.password, parseInt(process.env['SALTROUNDS']))
            }

            response.status(200).json(await service.execute(body, id_user))
            

        } catch (e) {
            next(e)
        }

    }

    async delete(request: Request, response: Response, next: NextFunction) {

        try {
            // TODO
        } catch (e) {
            next(e)
        }

    }

    async findByUsernameOrEmail(request: Request, response: Response, next: NextFunction) {

        try {
            
            const validator = require('email-validator')
            
            const account = { username: undefined, email: undefined }
            const service = container.resolve(FindByUsernameOrEmailUserService)
            const usernameOrEmail = request.params.id

            validator.validate(usernameOrEmail) ? account.email = usernameOrEmail : account.username = usernameOrEmail

            const user = await service.execute(account)
            user ? response.status(200).json(user) : response.status(406).send(handleError('user not found'))
            

        } catch (e) {
            next(e)
        }

    }

    async findById(request: Request, response: Response, next: NextFunction) {
        
        try {
            
            const service = container.resolve(FindByIdUserService)

            const user = await service.execute(request.params.id)
            user ? response.status(200).json(user) : response.status(406).send(handleError('user not found'))

        } catch (e) {
            next(e)
        }

    }

}