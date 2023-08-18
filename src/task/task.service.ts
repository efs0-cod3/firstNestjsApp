import { Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus, Task } from './entities/task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: v4(),
      title: 'test',
      description: 'testtest',
      status: TaskStatus.PENDING,
    },
  ];

  /**
   * The function creates a task with a unique ID, title, description, and a default status of
   * "PENDING", and adds it to an array of tasks.
   * @param {string} title - A string representing the title of the task. It is used to provide a brief
   * description or summary of the task.
   * @param {string} description - The `description` parameter is a string that represents the
   * description of the task. It provides additional details or information about the task.
   * @returns The task object that was created and added to the tasks array.
   */
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title: title,
      description: description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedTaskFields: UpdateTaskDto) {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedTaskFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  remove(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    return this.tasks;
  }
}
