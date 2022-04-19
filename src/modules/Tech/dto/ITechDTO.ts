import RepositoryEntity from "../../Repository/infra/entity/RepositoryEntity";

export default interface ITechDTO {
    id_repository: RepositoryEntity,
    tech: string
}