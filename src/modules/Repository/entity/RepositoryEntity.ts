import IRepositoryDTO from "../dto/IRepositoryDTO";

export default class RepositoryEntity implements IRepositoryDTO {
    id: string;    title: string;
    url: string;
    techs: String[];


}