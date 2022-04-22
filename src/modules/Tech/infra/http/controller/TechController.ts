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

            if(!repository) {
                response.status(406).send('Repository not found')
            }

            repository.techs.forEach(arrayTech => {
                arrayTech.tech.includes(body.tech) || response.status(406).send('Tech already exist')
            })

            response.status(200).json(await techService.execute(body))

        } catch (e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        try {
            
            const techService = container.resolve(DeleteTechService)
            const repositoryService = container.resolve(FindRepositoryService)

            const body = request.body

            await repositoryService.execute(body.id_repository) ?? response.status(406).send('Repository not found')

            const execStatus = await techService.execute(body)
            if(!execStatus.affected) {
                response.status(406).send('Tech not created')
            }

            response.status(200).json(execStatus)

        } catch (e) {
            next(e)
        }
    }

}