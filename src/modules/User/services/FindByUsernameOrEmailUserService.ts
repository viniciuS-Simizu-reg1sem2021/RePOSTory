import { inject, injectable } from "tsyringe";
import UserEntity from "../infra/entity/UserEntity";
import UserRepository from "../infra/repository/UserRepository";

@injectable()
export default class FindByUsernameOrEmailUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(account: { username?: string, email?: string }): Promise<UserEntity> {
        return await this.repository.findByUsernameOrEmail(account)
    }

}