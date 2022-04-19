import TechEntity from "../../Tech/infra/entity/TechEntity";

export default interface IRepositoryDTO {
    id_repository: string,
    title: string,
    url: string,
    techs?: TechEntity[],
    likes?: number
}