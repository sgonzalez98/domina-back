import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Usuario' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Clave' })
  password: string;
}
