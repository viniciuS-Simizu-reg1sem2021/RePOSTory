import { Repository } from 'typeorm';
import { injectable } from "tsyringe";
import RepositoryEntity from "../entity/RepositoryEntity";
import AppDataSource from '../../../../shared/infra/http/AppDataSource';
import IRepositoryDTO from '../../dto/IRepositoryDTO';

@injectable()
export default class RepositoryRepository {

    protected repository: Repository<RepositoryEntity>

    constructor() {
        this.repository = AppDataSource.getRepository(RepositoryEntity)
    }

    async create(data: IRepositoryDTO): Promise<RepositoryEntity> {
        return await this.repository.save(data)
    }
    
}