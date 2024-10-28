import { Model } from "mongoose";
import { Project } from "./schemas/project.schema";
import { CreateProjectDto } from "./dto/create-project.dto";
export declare class ProjectsService {
    private projectModel;
    constructor(projectModel: Model<Project>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectDto: CreateProjectDto): Promise<Project>;
    delete(id: string): Promise<Project>;
}
