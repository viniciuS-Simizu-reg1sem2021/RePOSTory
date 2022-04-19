import { Column, ManyToOne } from 'typeorm'
import ITechDTO from "../../dto/ITechDTO";
import RepositoryEntity from '../../../Repository/infra/entity/RepositoryEntity';

export default class TechEntity implements ITechDTO {

    @ManyToOne(() => RepositoryEntity, id_repository => id_repository.techs)
    id_repository: RepositoryEntity;
    
    @Column({ name: 'tech' })
    tech: string;
}