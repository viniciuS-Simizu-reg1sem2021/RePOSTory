import RepositoryEntity from "../../Repository/infra/entity/RepositoryEntity";

export default interface IUserDTO {
    id_user: string,
    username: string,
    email: string,
    password: string,
    repositories?: RepositoryEntity[]
}
