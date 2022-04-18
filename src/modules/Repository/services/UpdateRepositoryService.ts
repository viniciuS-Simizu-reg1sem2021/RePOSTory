import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import IRepositoryDTO from "../dto/IRepositoryDTO";
import RepositoryEntity from "../infra/entity/RepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class UpdateRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(data: IRepositoryDTO, id: string): Promise<UpdateResult> {
        return await this.repository.update(data, id)
    }

}