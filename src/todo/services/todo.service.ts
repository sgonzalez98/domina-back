import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../schemas/todo.schema';
import { CreateTodoDto } from '../dtos/todo/createTodo.dto';
import { UpdateTodoDto } from '../dtos/todo/updateTodo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('todo')
    private readonly todoModel: Model<Todo>,
  ) {}

  async create(data: CreateTodoDto): Promise<Todo> {
    return await this.todoModel.create({ ...data, isCompleted: false });
  }

  async getPending(user_id: string): Promise<Todo[]> {
    return await this.todoModel.find({ user_id, isCompleted: false }).exec();
  }

  async getCompleted(user_id: string): Promise<Todo[]> {
    return await this.todoModel.find({ user_id, isCompleted: true }).exec();
  }

  async update(id: string, data: UpdateTodoDto): Promise<Todo> {
    return await this.todoModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string) {
    return await this.todoModel.findByIdAndDelete(id);
  }
}
