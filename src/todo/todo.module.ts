import { Module } from '@nestjs/common';
import { TodoSchema } from './schemas/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'todo', schema: TodoSchema }])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
