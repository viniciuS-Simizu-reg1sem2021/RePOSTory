import { inject, injectable } from "tsyringe";
import IRepositoryDTO from "../dto/IRepositoryDTO";
import RepositoryEntity from "../infra/entity/RepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class CreateRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(data: IRepositoryDTO): Promise<RepositoryEntity> {
        return await this.repository.create(data)
    }

}