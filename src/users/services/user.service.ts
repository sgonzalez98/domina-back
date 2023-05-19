import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateDto } from '../dtos/user/create.dto';
import * as bcrypt from 'bcrypt';
import { UpdateDto } from '../dtos/user/update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<User>,
  ) {}

  async create(data: CreateDto): Promise<User> {
    const hash = await bcrypt.hash(data.password, 10);
    return await this.userModel.create({ ...data, password: hash });
  }

  async find(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }

  async getAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async update(id: string, data: UpdateDto): Promise<User> {
    if (data.password) {
      const hash = await bcrypt.hash(data.password, 10);
      data.password = hash;
    }
    return await this.userModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
