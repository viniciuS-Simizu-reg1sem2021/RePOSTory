import { Column, PrimaryColumn, OneToMany, Entity } from 'typeorm';
import RepositoryEntity from "../../../Repository/infra/entity/RepositoryEntity";
import IUserEntity from './IUserEntity';

@Entity('user')
export default class UserEntity implements IUserEntity {

    @PrimaryColumn({ name: 'id_user' })
    id_user: string;

    @Column({ name: 'username', unique: true })
    username: string;

    @Column({ name: 'email', unique: true })
    email: string;

    @Column({ name: 'password' })
    password: string;

    @OneToMany(() => RepositoryEntity, repositories => repositories.user, { cascade: false })
    repositories?: RepositoryEntity[];
    
}