import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsNumber()
  targetAmount: number;

  @IsOptional()
  deadline?: Date | null;
}
