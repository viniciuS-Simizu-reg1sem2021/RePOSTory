import { DeepPartial, DeleteResult, UpdateResult } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"

export default interface IBaseRepository<Entity> {

    create(data: DeepPartial<Entity>): Promise<Entity>

    update(data: QueryDeepPartialEntity<Entity>, id: string): Promise<UpdateResult>

    delete(id: string): Promise<DeleteResult>

    list(): Promise<Entity[] | null>

}