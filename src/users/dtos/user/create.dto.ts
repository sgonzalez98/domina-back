import { IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre completo' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Usuario' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email del usuario' })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Numero de telefono del usuario' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Clave' })
  password: string;
}
