import TechEntity from "../../Tech/infra/entity/TechEntity";
import UserEntity from "../../User/infra/entity/UserEntity";

export default interface IRepositoryDTO {
    id_repository: string,
    title: string,
    url: string,
    techs?: TechEntity[],
    likes: number
    user: UserEntity
}