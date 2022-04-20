import { DeleteResult } from 'typeorm';
import { injectable, inject } from "tsyringe";
import ITechDTO from "../dto/ITechDTO";
import TechRepository from "../infra/repository/TechRepository";

@injectable()
export default class DeleteTechService {

    constructor(@inject(TechRepository) private repository: TechRepository) {}

    async execute(data: ITechDTO): Promise<DeleteResult> {
        return await this.repository.deleteByIdAndTech(data)
    }

}