import { inject, injectable } from "tsyringe";
import RepositoryEntity from "../infra/entity/RepositoryEntity";
import RepositoryRepository from "../infra/repository/RepositoryRepository";

@injectable()
export default class ListRepositoryService {

    constructor(@inject(RepositoryRepository) private repository: RepositoryRepository) {}

    async execute(): Promise<RepositoryEntity[] | null> {
        return await this.repository.list()
    }

}