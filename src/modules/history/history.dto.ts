import { IHistory } from './history.interface';
import { IsString, IsInt, IsNotEmpty, IsDate, Min, Max } from 'class-validator';
import { NotAcceptableException } from '@nestjs/common';

export class HistoryDto implements IHistory {
  @IsInt({message: 'id int?', context: {errorCode: NotAcceptableException}})
  readonly id: number;
  @IsString({ message: '字段名是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly text: string;
  @IsInt({ message: 'categoryId必须是整数', context: { errorCode: NotAcceptableException } })
  readonly todoId: number;
  @IsInt({ message: 'isDel必须是整数', context: { errorCode: NotAcceptableException } })
  readonly isDel: number;
  @IsString({ message: '操作类型是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly operateType: string;
  @IsDate({ message: '操作时间是必不可少的', context: { errorCode: NotAcceptableException } })
  readonly time: Date;
}
