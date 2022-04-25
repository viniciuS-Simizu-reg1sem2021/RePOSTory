import { inject, injectable } from "tsyringe";
import UserEntity from "../infra/entity/UserEntity";
import UserRepository from "../infra/repository/UserRepository";

@injectable()
export default class FindByIdUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(id_user: string): Promise<UserEntity> {
        return await this.repository.findById(id_user)
    }

}