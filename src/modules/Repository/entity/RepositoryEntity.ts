import IRepositoryDTO from "../dto/IRepositoryDTO";
import { Entity, PrimaryColumn } from "typeorm";

@Entity('repository')
export default class RepositoryEntity implements IRepositoryDTO {
    @PrimaryColumn({ name: 'pk_repository', default:  })
    id: string;    
    title: string;
    url: string;
    techs: String[];
}