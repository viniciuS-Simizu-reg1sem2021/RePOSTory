import { UpdateResult } from 'typeorm';
import { inject, injectable } from "tsyringe";
import UserRepository from "../infra/repository/UserRepository";
import IUserEntity from '../infra/entity/IUserEntity';

@injectable()
export default class UpdateUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(data: IUserEntity, id_user: string): Promise<UpdateResult> {
        return await this.repository.update(data, id_user)
    }

}