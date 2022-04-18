import { DeepPartial, UpdateResult } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"

export default interface IBaseRepository<DTO, Entity> {

    create(data: DeepPartial<Entity>): Promise<Entity>

    update(data: QueryDeepPartialEntity<Entity>, id: string): Promise<UpdateResult>

    delete(id: string): Promise<void>

    list(): Promise<Entity[] | undefined>

}