import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import IRepositoryDTO from '../../dto/IRepositoryDTO';
import TechEntity from '../../../Tech/infra/entity/TechEntity';
import UserEntity from '../../../User/infra/entity/UserEntity';

@Entity('repository')
export default class RepositoryEntity implements IRepositoryDTO {
    @PrimaryColumn({ name: 'id_repository' })
    id_repository: string;

    @Column({ name: 'title', unique: true })
    title: string;

    @Column({ name: 'url' })
    url: string;

    @Column({ name: 'likes', default: 0 })
    likes: number;

    @OneToMany(() => TechEntity, techs => techs.id_repository, { cascade: true, })
    techs: TechEntity[]

    @ManyToOne(() => UserEntity, user => user.repositories)
    @JoinColumn({ name: 'id_user' })
    user: UserEntity
}