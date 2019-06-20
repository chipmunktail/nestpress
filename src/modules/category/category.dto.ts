import { Category } from './category.interface';
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { NotAcceptableException } from '@nestjs/common';

export class CategoryDto implements Category {

  @IsInt({ message: 'categoryID必须是整数', context: { errorCode: NotAcceptableException } })
  @Min(0, { message: 'categoryID必须大于等于1', context: { errorCode: NotAcceptableException } })
  readonly id: number;

  @IsNotEmpty({ message: '字段名是必不可少的', context: { errorCode: NotAcceptableException } })
  @IsString({ message: '字段名是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly text: string;

  @IsInt({ message: 'userId必须是整数', context: { errorCode: NotAcceptableException } })
  @Min(0, { message: 'userId必须大于1', context: { errorCode: NotAcceptableException } })
  @Max(200, { message: 'userId必须小于200', context: { errorCode: NotAcceptableException } })
  readonly userId: number;

  @IsInt({ message: 'isDel必须是整数', context: { errorCode: NotAcceptableException } })
  @Min(0, { message: 'isDel必须大于等于1', context: { errorCode: NotAcceptableException } })
  readonly isDel: number;
  @IsInt({ message: 'isPub必须是整数', context: { errorCode: NotAcceptableException } })
  @Min(0, { message: 'isPub必须大于等于1', context: { errorCode: NotAcceptableException } })
  readonly isPub: number;
}
