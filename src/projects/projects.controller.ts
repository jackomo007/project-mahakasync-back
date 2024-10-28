import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  async findAll() {
    return this.projectsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.projectsService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateProjectDto: CreateProjectDto
  ) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.projectsService.delete(id);
  }
}
