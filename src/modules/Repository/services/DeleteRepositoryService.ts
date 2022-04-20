import { DeleteResult } from 'typeorm';
import { inject, injectable } from "tsyringe";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class DeleteRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(id: string): Promise<DeleteResult> {
        return await this.repository.delete(id)
    }

}