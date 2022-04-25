import { DeleteResult } from 'typeorm';
import { inject, injectable } from "tsyringe";
import UserRepository from "../infra/repository/UserRepository";

@injectable()
export default class DeleteUserService {

    constructor(@inject(UserRepository) private repository: UserRepository) {}

    async execute(id_user: string): Promise<DeleteResult> {
        return await this.repository.delete(id_user)
    }

}