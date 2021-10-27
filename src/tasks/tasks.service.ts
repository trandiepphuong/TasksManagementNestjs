import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // private tasks: Task[] = [];
  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not founded.`);
    }
    return found;
  }
  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }
  // updateTask(updateTaskDto: UpdateTaskDto, id: string): Task {
  //   const { title, description } = updateTaskDto;
  //   const oldTask = this.getTaskById(id);
  //   oldTask.id = id;
  //   oldTask.title = title;
  //   oldTask.description = description;
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   // this.tasks.push(oldTask);
  //   return oldTask;
  // }
  // updateTaskStatus(status: TaskStatus, id: string): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not founded.`);
    }
  }
  // getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //     });
  //   }
  //   return tasks;
  // }
}
