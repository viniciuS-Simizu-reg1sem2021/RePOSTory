import { Request, Response, NextFunction } from 'express';
import { container, injectable } from "tsyringe";
import FindRepositoryService from '../../../../Repository/services/FindRepositoryService';
import CreateTechService from '../../../services/CreateTechService';
import DeleteTechService from '../../../services/DeleteTechService';

@injectable()
export default class TechController {

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            
            const techService = container.resolve(CreateTechService)
            const repositoryService = container.resolve(FindRepositoryService)

            const body = request.body

            const repository = await repositoryService.execute(body.id_repository)
            console.log(repository.techs) // FIXME
            if(repository.techs.includes(body.tech)) {
                response.status(406).send('Tech already exist')
            }

            const techCreated = await techService.execute(body)

            if(!techCreated) {
                throw new Error('Create Query Failed')
            }

            response.status(200).json(techCreated)

        } catch (e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            
            const service = container.resolve(DeleteTechService)

            const execStatus = await service.execute(request.body)

            if(!execStatus.affected) {
                response.status(406).send('Repository not found')
            }

            response.status(200).json(execStatus)

        } catch (e) {
            next(e)
        }
    }

}