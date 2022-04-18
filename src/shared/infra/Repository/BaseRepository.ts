import { DeepPartial, EntityTarget, getRepository, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import IBaseRepository from "./IBaseRepository";

export default abstract class BaseRepository<DTO, Entity> implements IBaseRepository<DTO, Entity> {
    
    protected repository: Repository<Entity>

    constructor(entity: EntityTarget<Entity>) {
        this.repository = getRepository(entity)
    }

    async create(data: DeepPartial<Entity>): Promise<Entity> {
        return await this.repository.save(data)
    }

    async update(data: QueryDeepPartialEntity<Entity>, id: string): Promise<UpdateResult> {
        return await this.repository.update(id, data)
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
    async list(): Promise<Entity[]> {
        return await this.repository.find()
    }
    
}