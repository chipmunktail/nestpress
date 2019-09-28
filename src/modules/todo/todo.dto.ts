import { ITodo } from './todo.interface';
import { IsString, IsInt, IsNotEmpty, Min, Max, Length } from 'class-validator';
import { NotAcceptableException } from '@nestjs/common';

export class TodoDto implements ITodo {

  @IsInt({message: 'id int?', context: {errorCode: NotAcceptableException}})
  readonly id: number;

  @IsString({ message: 'uuid必须是字符串', context: { errorCode: NotAcceptableException } })
  @Length(36)
  readonly uuid: string;

  @IsString({ message: '字段名是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly text: string;

  @IsInt({ message: 'categoryId必须是整数', context: { errorCode: NotAcceptableException } })
  readonly menuId: number;

  @IsInt({ message: 'isDel必须是整数', context: { errorCode: NotAcceptableException } })
  readonly isDel: number;
}
