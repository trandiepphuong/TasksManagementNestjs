import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilter(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
  @Put('/:id')
  updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('id') id: string,
  ): Task {
    return this.tasksService.updateTask(updateTaskDto, id);
  }
  @Put('/:id/status')
  updateTaskStatus(
    @Body('status') status: TaskStatus,
    @Param('id') id: string,
  ): Task {
    return this.tasksService.updateTaskStatus(status, id);
  }
}
