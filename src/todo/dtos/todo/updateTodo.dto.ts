import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion de la tarea' })
  todo: string;
}
