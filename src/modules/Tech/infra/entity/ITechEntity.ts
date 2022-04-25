import RepositoryEntity from "../../../Repository/infra/entity/RepositoryEntity";

export default interface ITechEntity {
    id_tech?: number
    id_repository: RepositoryEntity;
    tech: string;
}