import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateDto } from '../dtos/user/create.dto';
import { UpdateDto } from '../dtos/user/update.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() data: CreateDto) {
    return await this.userService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAlls() {
    return await this.userService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() data: UpdateDto) {
    return await this.userService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
