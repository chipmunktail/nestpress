import { Menu } from './menu.interface';
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { NotAcceptableException } from '@nestjs/common';

export class MenuDto implements Menu {
  @IsInt({message: 'id int?', context: {errorCode: NotAcceptableException}})
  readonly id: number;
  @IsString({ message: '字段名是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly text: string;
  @IsInt({ message: 'categoryId必须是整数', context: { errorCode: NotAcceptableException } })
  readonly categoryId: number;
  @IsInt({ message: 'isDel必须是整数', context: { errorCode: NotAcceptableException } })
  readonly isDel: number;
}
