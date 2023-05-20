import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validate(username: string, password: string): Promise<null | User> {
    const user = await this.userService.find(username);
    if (!user) {
      throw new NotFoundException('No se encontro el usuario');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new ConflictException('Credenciales invalidas');
    }

    delete user.password;
    return user;
  }

  async login(data: LoginDto) {
    const user = await this.validate(data.username, data.password);
    const payload = { name: user.name, email: user.email };
    const secret = this.configService.get<string>('JWT_SECRET');

    return {
      user: {
        name: user.name,
        id: user._id,
      },
      access_token: this.jwtService.sign(payload, { secret }),
    };
  }
}
