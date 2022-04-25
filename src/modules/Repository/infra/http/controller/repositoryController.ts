import { Request, Response, NextFunction } from 'express';
import { injectable, container } from 'tsyringe';
import CreateRepositoryService from '../../../services/CreateRepositoryService';
import CreateTechService from '../../../../Tech/services/CreateTechService'
import DeleteRepositoryService from '../../../services/DeleteRepositoryService';
import ListRepositoryService from '../../../services/ListRepositoryService';
import UpdateRepositoryService from '../../../services/UpdateRepositoryService';
import FindRepositoryService from '../../../services/FindRepositoryService';
import FindByIdUserService from '../../../../User/services/FindByIdUserService';

import { v4 as uuid } from 'uuid'

@injectable()
export default class RepositoryController {
    
    async create(request: Request, response: Response, next: NextFunction) {
        try {

            const createRepositoryService = container.resolve(CreateRepositoryService)
            const findUserService = container.resolve(FindByIdUserService)

            const body = request.body

            let user = await findUserService.execute(body.id_user)
            user || response.status(406).send('User not found')

            body.id_repository = uuid()

            const techs = body.techs
            delete body.techs

            try {
                await createRepositoryService.execute(body)  
            } catch(e) {
                response.status(406).send('Title already used')
                throw new Error(e)
            }

            // Verify if body has techs and if is filled
            if(techs?.length) {

                // Create each tech in array techs
                const techService = container.resolve(CreateTechService)

                techs.forEach(async tech => {
                    await techService.execute({ id_repository: body.id_repository, tech: tech })
                        .then(() => console.log(`${body.title}: Tech "${tech}" inserida`))

                        // If Create Query Error, delete the entire repository and yours techs
                        .catch(async e => {
                            const deleteRepositoryService = container.resolve(DeleteRepositoryService)

                            await deleteRepositoryService.execute(body.id_repository)
                            throw new Error(`${body.title}: Error on tech ${tech}: ${e}`)
                        })
                })
            }

            response.status(200).json({ ...body, techs: techs })

        } catch (e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(DeleteRepositoryService)

            const id = request.params.id

            const execResult = await service.execute(id)

            execResult.affected ? response.status(200).json(execResult) : response.status(406).send('Repository not found')
            
        } catch(e) {
            next(e)
        }
    }

    async list(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(ListRepositoryService)
            
            response.status(200).json(await service.execute())
        } catch(e) {
            next(e)
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(UpdateRepositoryService)

            const body = request.body
            const id = request.params.id

            const result = await service.execute(body, id)

            result.affected ? response.status(200).json(result) : response.status(406).send('Repository not found to update')
        } catch(e) {
            next(e)
        }
    }

    async find(request: Request, response: Response, next: NextFunction) {
        try {

            const service = container.resolve(FindRepositoryService)

            const repository = await service.execute(request.params.id)

            repository ? response.status(200).json(repository) : response.status(406).send('Repository not found')
        
        } catch (e) {
            next(e)
        }
    }

}
