import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import ITechDTO from "../../dto/ITechDTO";
import RepositoryEntity from '../../../Repository/infra/entity/RepositoryEntity';

@Entity('tech')
export default class TechEntity implements ITechDTO {

    @PrimaryGeneratedColumn('increment')
    id_tech?: number

    @ManyToOne(() => RepositoryEntity, id_repository => id_repository.techs, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'id_repository' })
    id_repository: RepositoryEntity;
    
    @Column({ name: 'tech' })
    tech: string;
}