import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TodoService } from '../services/todo.service';
import { CreateTodoDto } from '../dtos/todo/createTodo.dto';
import { UpdateTodoDto } from '../dtos/todo/updateTodo.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Api para creacion de un TODO' })
  @Post('/create')
  async create(@Body() data: CreateTodoDto) {
    return await this.todoService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Api para obtener los TODO pendientes para el usuario' })
  @Get('pending/:id')
  async getPending(@Param('id') id: string) {
    return await this.todoService.getPending(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Api para obtener los TODO completados por el usuario' })
  @Get('completed/:id')
  async getCompleted(@Param('id') id: string) {
    return await this.todoService.getCompleted(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Api para actualizar un TODO' })
  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() data: UpdateTodoDto) {
    return await this.todoService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Api para eliminar un TODO' })
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return await this.todoService.delete(id);
  }
}
