import { inject, injectable } from "tsyringe";
import IUserDTO from "../dto/IUserDTO";
import UserEntity from "../infra/entity/UserEntity";
import UserRepository from "../infra/repository/UserRepository";

@injectable()
export default class CreateUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(data: IUserDTO): Promise<UserEntity> {
        return await this.repository.create(data)
    }

}