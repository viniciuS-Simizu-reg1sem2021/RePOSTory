import { inject, injectable } from "tsyringe";
import IRepositoryEntity from "../infra/entity/IRepositoryEntity";
import RepositoryEntity from "../infra/entity/RepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class CreateRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(data: IRepositoryEntity): Promise<RepositoryEntity> {
        return await this.repository.create(data)
    }

}