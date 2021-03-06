import { injectable } from "tsyringe";
import { DeleteResult } from "typeorm";
import BaseRepository from "../../../../shared/infra/Repository/BaseRepository";
import ITechEntity from "../entity/ITechEntity";
import TechEntity from "../entity/TechEntity";

@injectable()
export default class TechRepository extends BaseRepository<TechEntity> {

    constructor() { super(TechEntity) }

    async deleteByIdAndTech(data: ITechEntity): Promise<DeleteResult> {

        return await this.repository.createQueryBuilder()
            .delete()
            .from(TechEntity)
            .where("id_repository = :id_repository", { id_repository: data.id_repository })
            .andWhere("tech = :tech", { tech: data.tech })
            .execute()

    }

}