import { UpdateResult } from 'typeorm';
import { inject, injectable } from "tsyringe";
import IUserDTO from "../dto/IUserDTO";
import UserEntity from "../infra/entity/UserEntity";
import UserRepository from "../infra/repository/UserRepository";

@injectable()
export default class UpdateUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(data: IUserDTO, id_user: string): Promise<UpdateResult> {
        return await this.repository.update(data, id_user)
    }

}