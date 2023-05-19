import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id del usuario' })
  user_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion de la tarea' })
  todo: string;
}
