import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  @ApiProperty({
    required: false,
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
  })
  search?: string;
}
