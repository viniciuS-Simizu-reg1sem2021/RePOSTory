import { Repository } from 'typeorm';
import { injectable } from "tsyringe";
import RepositoryEntity from "../entity/RepositoryEntity";
import IRepositoryDTO from '../../dto/IRepositoryDTO';
import BaseRepository from '../../../../shared/infra/Repository/BaseRepository';

@injectable()
export default class RepositoryRepository extends BaseRepository<IRepositoryDTO, RepositoryEntity> {
    
    constructor() { super(RepositoryEntity) }

}