import { injectable } from "tsyringe";
import BaseRepository from "../../../../shared/infra/Repository/BaseRepository";
import IUserDTO from "../../dto/IUserDTO";
import UserEntity from "../entity/UserEntity";

@injectable()
export default class UserRepository extends BaseRepository<IUserDTO, UserEntity> {

    constructor() { super(UserEntity) }

    async findByUsernameOrEmail(account: { username?: string, email?: string }): Promise<UserEntity> {

        return await this.repository.createQueryBuilder('user')
            .leftJoinAndSelect('user.repositories', 'repositories')
            // .select(['user.username', 'repositories'])
            .where('username = :username', { username: account.username })
            .orWhere('email = :email', { email: account.email })
            .getOne()

    }

    async findById(id_user: string): Promise<UserEntity> {
        return await this.repository.findOne(id_user, { relations: ['repositories'] })
    }

}