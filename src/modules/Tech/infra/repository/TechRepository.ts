import { injectable } from "tsyringe";
import BaseRepository from "../../../../shared/infra/Repository/BaseRepository";
import ITechDTO from "../../dto/ITechDTO";
import TechEntity from "../entity/TechEntity";

@injectable()
export default class TechRepository extends BaseRepository<ITechDTO, TechEntity> {

    constructor() { super(TechEntity) }

    async deleteByIdAndTech(id_repository: string, tech: string): Promise<void> {

        await this.repository.createQueryBuilder()
            .delete()
            .from(TechEntity)
            .where("id_repository = :id_repository", { id_repository: id_repository })
            .andWhere("tech = :tech", { tech: tech })
            .execute()

    }

}