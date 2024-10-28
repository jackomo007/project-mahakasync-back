import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<import("./schemas/project.schema").Project>;
    findAll(): Promise<import("./schemas/project.schema").Project[]>;
    findOne(id: string): Promise<import("./schemas/project.schema").Project>;
    update(id: string, updateProjectDto: CreateProjectDto): Promise<import("./schemas/project.schema").Project>;
    delete(id: string): Promise<import("./schemas/project.schema").Project>;
}
