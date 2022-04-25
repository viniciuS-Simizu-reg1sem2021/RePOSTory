import TechEntity from "../../../Tech/infra/entity/TechEntity";
import UserEntity from "../../../User/infra/entity/UserEntity";

export default interface IRepositoryEntity {
    id_repository: string;
    title: string;
    url: string;
    likes: number;
    techs: TechEntity[]
    user: UserEntity
}