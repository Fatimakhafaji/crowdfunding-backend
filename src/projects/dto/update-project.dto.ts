import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateProjectDto {
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
