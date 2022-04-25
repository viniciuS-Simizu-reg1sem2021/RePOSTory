import { DeleteResult } from 'typeorm';
import { injectable, inject } from "tsyringe";
import TechRepository from "../infra/repository/TechRepository";
import ITechEntity from '../infra/entity/ITechEntity';

@injectable()
export default class DeleteTechService {

    constructor(@inject(TechRepository) private repository: TechRepository) {}

    async execute(data: ITechEntity): Promise<DeleteResult> {
        return await this.repository.deleteByIdAndTech(data)
    }

}