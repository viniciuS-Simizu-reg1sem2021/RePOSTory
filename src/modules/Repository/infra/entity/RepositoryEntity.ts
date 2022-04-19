import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import IRepositoryDTO from '../../dto/IRepositoryDTO';
import TechEntity from '../../../Tech/infra/entity/TechEntity';

@Entity('repository')
export default class RepositoryEntity implements IRepositoryDTO {
    @PrimaryColumn({ name: 'id_repository' })
    id_repository: string;

    @Column({ name: 'title', unique: true })
    title: string;

    @Column({ name: 'url' })
    url: string;

    @Column({ name: 'likes', default: 0 })
    likes?: number;

    @OneToMany(() => TechEntity, techs => techs.id_repository, { cascade: true, })
    techs: TechEntity[]
}