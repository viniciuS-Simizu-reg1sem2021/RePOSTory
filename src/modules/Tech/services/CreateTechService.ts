import { injectable, inject } from "tsyringe";
import TechRepository from "../infra/repository/TechRepository";
import TechEntity from "../infra/entity/TechEntity";
import ITechDTO from "../dto/ITechDTO";

@injectable()
export default class CreateTechService {

    constructor(@inject(TechRepository) private repository: TechRepository) {}

    async execute(data: ITechDTO): Promise<TechEntity> {
        return await this.repository.create(data)
    }

}