import { NextFunction, Request, Response } from 'express'
import { inject, injectable, container } from 'tsyringe'

import RepositoryEntity from "../../../entity/RepositoryEntity";
import FindAllRepositoryService from '../../../services/FindAllRepositoryService';
import CreateRepositoryService from '../../../services/CreateRepositoryService';
import UpdateRepositoryService from '../../../services/UpdateRepositoryService';
import DeleteRepositoryService from '../../../services/DeleteRepositoryService';
import LikeRepositoryService from '../../../services/LikeRepositoryService';

@injectable()
export default class RepositoryController {
    public async findAll(request: Request, response: Response, next: NextFunction): Promise<RepositoryEntity> {
        try {
            const service = container.resolve(FindAllRepositoryService)
            
        } catch(e) {
            next(e)
        }
    }

    async create(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = container.resolve(CreateRepositoryService)
        } catch(e) {
            next(e)
        }
    }

    async update(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = container.resolve(UpdateRepositoryService)
        } catch(e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = container.resolve(DeleteRepositoryService)
        } catch(e) {
            next(e)
        }
    }

    async like(request: Request, response: Response, next: NextFunction): Promise<RepositoryEntity> {
        try {
            const service = container.resolve(LikeRepositoryService)
        } catch(e) {
            next(e)
        }
    }
}