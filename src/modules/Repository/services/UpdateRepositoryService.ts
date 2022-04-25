import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import IRepositoryEntity from "../infra/entity/IRepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class UpdateRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(data: IRepositoryEntity, id: string): Promise<UpdateResult> {
        return await this.repository.update(data, id)
    }

}