import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'

import RepositoryEntity from "../../../entity/RepositoryEntity";
import FindAllRepositoryService from '../../../services/FindAllRepositoryService'

@injectable()
export default class RepositoryController {
    public async findAll(request: Request, response: Response, next: NextFunction): Promise<RepositoryEntity> {
        try {
            const service = FindAllRepositoryService
            service.
        } catch(e) {
            next(e)
        }
    }

    async create(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = new 
        } catch(e) {
            next(e)
        }
    }

    async update(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = new 
        } catch(e) {
            next(e)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const service = new 
        } catch(e) {
            next(e)
        }
    }

    async like(request: Request, response: Response, next: NextFunction): Promise<RepositoryEntity> {
        try {
            const service = new 
        } catch(e) {
            next(e)
        }
    }
}