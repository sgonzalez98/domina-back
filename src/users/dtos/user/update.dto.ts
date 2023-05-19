import { IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Nombre completo' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Usuario' })
  username: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ description: 'Email del usuario' })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Numero de telefono del usuario' })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Clave' })
  password: string;
}
