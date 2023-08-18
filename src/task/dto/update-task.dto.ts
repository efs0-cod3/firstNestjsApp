import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../entities/task.entity';
import { IsNotEmpty, IsString, IsOptional, IsIn } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
  status?: TaskStatus;
}
