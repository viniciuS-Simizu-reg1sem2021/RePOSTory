import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import RepositoryEntity from '../../../Repository/infra/entity/RepositoryEntity';
import ITechEntity from './ITechEntity';

@Entity('tech')
export default class TechEntity implements ITechEntity {

    @PrimaryGeneratedColumn('increment')
    id_tech?: number

    @ManyToOne(() => RepositoryEntity, id_repository => id_repository.techs, { onDelete: 'CASCADE', })
    @JoinColumn({ name: 'id_repository' })
    id_repository: RepositoryEntity;
    
    @Column({ name: 'tech' })
    tech: string;
}