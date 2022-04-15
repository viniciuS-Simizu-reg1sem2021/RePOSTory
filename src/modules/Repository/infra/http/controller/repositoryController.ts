import { Request, Response, NextFunction } from 'express';
import { injectable, container } from 'tsyringe';
import CreateRepositoryService from '../../../services/CreateRepositoryService';
import { v4 as uuid } from 'uuid'

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

}
