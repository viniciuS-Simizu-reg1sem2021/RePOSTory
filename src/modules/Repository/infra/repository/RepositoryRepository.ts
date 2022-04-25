import { Repository } from 'typeorm';
import { injectable } from "tsyringe";
import RepositoryEntity from "../entity/RepositoryEntity";
import IRepositoryDTO from '../../dto/RepositoryDTO';
import BaseRepository from '../../../../shared/infra/Repository/BaseRepository';

@injectable()
export default class RepositoryRepository extends BaseRepository<RepositoryEntity> {
    
    constructor() { super(RepositoryEntity) }

    async list(): Promise<RepositoryEntity[]> {
        return await this.repository.find({ relations: ['techs', 'user'] })
        
        // createQueryBuilder('repository')
        //     .leftJoinAndSelect('repository.user', 'user')
        //     .leftJoinAndSelect('repository.techs', 'tech')
        //     .select(['repository', 'tech.tech', 'user.username'])
        //     .getMany()

    }

    async find(id_repository: string): Promise<RepositoryEntity | undefined> {
        return await this.repository.findOne(id_repository, { relations: ['techs', 'user'] })
    }

}