import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import IRepositoryDTO from '../../dto/IRepositoryDTO';

@Entity('repository')
export default class RepositoryEntity implements IRepositoryDTO {
    @PrimaryColumn({ name: 'id_repository' })
    id_repository: string;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'url' })
    url: string;

    @Column({ name: 'likes', default: 0 })
    likes?: number;
}