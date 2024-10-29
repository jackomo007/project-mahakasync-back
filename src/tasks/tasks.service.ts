import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Task, TaskDocument } from "./schemas/task.schema";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const newTask = new this.taskModel(createTaskDto);
      return newTask.save();
    } catch (error) {
      throw new BadRequestException("Invalid Task format");
    }
  }

  async findAll(projectId?: string): Promise<Task[]> {
    try {
      if (projectId) {
        return this.taskModel.find({ projectId }).exec();
      }
      throw new BadRequestException("There is not projectId in the request");
    } catch (error) {
      throw new BadRequestException("None task was found");
    }
  }

  async findOne(id: string): Promise<Task> {
    try {
      const task = await this.taskModel.findById(id).exec();
      if (!task) {
        throw new NotFoundException(`Task not found`);
      }
      return task;
    } catch (error) {
      throw new BadRequestException("Invalid Task ID format");
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const updatedTask = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
    if (!updatedTask) {
      throw new NotFoundException(`Task not found`);
    }
    return updatedTask;
  }

  async delete(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException(`Task not found`);
    }
    return deletedTask;
  }
}
