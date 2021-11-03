import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';
export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  @ApiProperty() 
  status: TaskStatus;
}
