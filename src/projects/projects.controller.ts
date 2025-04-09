import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(
    @Body()
    projectData: {
      title: string;
      description: string;
      targetAmount: number;
      deadline: Date;
    },
  ): Promise<Project> {
    return this.projectsService.create(projectData);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project | null> {
    return this.projectsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() projectData: { title?: string; description?: string },
  ): Promise<Project> {
    return this.projectsService.update(+id, projectData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Project> {
    return this.projectsService.remove(+id);
  }
}
