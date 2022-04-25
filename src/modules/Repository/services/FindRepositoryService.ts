import { inject, injectable } from "tsyringe";
import RepositoryEntity from "../infra/entity/RepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class FindRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(id_repository: string): Promise<RepositoryEntity | undefined> {
        return await this.repository.find(id_repository)
    }

}