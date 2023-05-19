import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Descripcion de la tarea' })
  todo: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: 'Booleando para saber si la tarea esta completa' })
  isCompleted: boolean;
}
