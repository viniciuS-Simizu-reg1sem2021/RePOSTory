import { Request, Response, NextFunction } from 'express';
import { injectable, container } from 'tsyringe';
import CreateRepositoryService from '../../../services/CreateRepositoryService';
import { v4 as uuid } from 'uuid'
import DeleteRepositoryService from '../../../services/DeleteRepositoryService';
import ListRepositoryService from '../../../services/ListRepositoryService';
import UpdateRepositoryService from '../../../services/UpdateRepositoryService';

@injectable()
export default class RepositoryController {
    
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const service = container.resolve(CreateRepositoryService)

            let body = request.body
            body.id_repository = uuid()
            
            response.json(await service.execute(body))
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
