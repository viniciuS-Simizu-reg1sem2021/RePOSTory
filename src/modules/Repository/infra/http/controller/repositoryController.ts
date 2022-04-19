import { Request, Response, NextFunction } from 'express';
import { injectable, container } from 'tsyringe';
import CreateRepositoryService from '../../../services/CreateRepositoryService';
import CreateTechService from '../../../../Tech/services/CreateTechService'
import { v4 as uuid } from 'uuid'
import DeleteRepositoryService from '../../../services/DeleteRepositoryService';
import ListRepositoryService from '../../../services/ListRepositoryService';
import UpdateRepositoryService from '../../../services/UpdateRepositoryService';

@injectable()
export default class RepositoryController {
    
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const createRepositoryService = container.resolve(CreateRepositoryService)

            let body = request.body
            body.id_repository = uuid()

            const techs = body.techs ? body.techs : undefined
            delete body.techs

            await createRepositoryService.execute(body)

            if(techs?.length) {
                const techService = container.resolve(CreateTechService)

                techs.forEach(async tech => {
                    await techService.execute({ id_repository: body.id_repository, tech: tech })
                        .then(() => console.log(`${body.id_repository}: Tech ${tech} inserida`))

                        .catch(async e => {
                            const deleteRepositoryService = container.resolve(DeleteRepositoryService)

                            await deleteRepositoryService.execute(body.id_repository)
                            console.log(`${body.id_repository}: Error on tech ${tech}: ${e}`)
                        })
                })
            }

            response.send('Repository created')
        } catch (e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(DeleteRepositoryService)

            const id = request.params.id
            
            await service.execute(id)
            response.send('Repositório deletado com sucesso')
        } catch(e) {
            next(e)
        }
    }

    async list(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(ListRepositoryService)
            
            response.json(await service.execute())
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
            if(result.affected != 1) {
                throw new Error()
            }

            response.send('Repositório atualizado com sucesso')
        } catch(e) {
            next(e)
        }
    }

}
