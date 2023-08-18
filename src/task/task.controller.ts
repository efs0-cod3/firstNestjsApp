import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() newTask: CreateTaskDto): Task {
    console.log(newTask);
    return this.taskService.createTask(newTask.title, newTask.description);
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Task[] {
    return this.taskService.remove(id);
  }
}
