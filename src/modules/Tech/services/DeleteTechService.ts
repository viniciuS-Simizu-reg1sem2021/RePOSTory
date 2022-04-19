import { injectable, inject } from "tsyringe";
import TechRepository from "../infra/repository/TechRepository";

@injectable()
export default class DeleteTechService {

    constructor(@inject(TechRepository) private repository: TechRepository) {}

    async execute(id_repository: string, tech: string): Promise<void> {
        await this.repository.deleteByIdAndTech(id_repository, tech)
    }

}