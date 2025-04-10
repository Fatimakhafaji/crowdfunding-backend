import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectDto) {
    try {
      return this.prisma.project.create({
        data: {
          title: data.title,
          description: data.description ?? null,
          targetAmount: data.targetAmount,
          deadline: data.deadline ?? null,
        },
      });
    } catch (error) {
      console.error('Error creating project:', error);
      throw new InternalServerErrorException('Failed to create project');
    }
  }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description ?? null,
        targetAmount: data.targetAmount,
        deadline: data.deadline ?? null,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
