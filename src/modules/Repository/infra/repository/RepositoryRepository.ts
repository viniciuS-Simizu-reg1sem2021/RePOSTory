import { Repository } from 'typeorm';
import { injectable } from "tsyringe";
import RepositoryEntity from "../entity/RepositoryEntity";
import IRepositoryDTO from '../../dto/IRepositoryDTO';
import BaseRepository from '../../../../shared/infra/Repository/BaseRepository';

@injectable()
export default class RepositoryRepository extends BaseRepository<IRepositoryDTO, RepositoryEntity> {
    
    constructor() { super(RepositoryEntity) }

    async list(): Promise<RepositoryEntity[]> {
        return await this.repository.find({ relations: ['techs'] })
    }

    async find(id_repository: string): Promise<RepositoryEntity | undefined> {
        return await this.repository.findOne(id_repository, { relations: ['techs'] })
    }

}