import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from '../dtos/login.dto';
import { AuthService } from '../services/auth.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOperation({ summary: 'Api para realizar inicio de sesion' })
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }
}
