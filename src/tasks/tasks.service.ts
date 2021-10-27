import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
@Injectable()
export class TasksService {
  // private tasks: Task[] = [];
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID ${id} not founded.`);
  //   }
  //   return found;
  // }
  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
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
  // //   deleteTask(id: string): Task {
  // //     const task: Task = this.getTaskById(id);
  // //     const indexOfTask = this.tasks.indexOf(task);
  // //     this.tasks.splice(indexOfTask, 1);
  // //     return task;
  // //   }
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
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
