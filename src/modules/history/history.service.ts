import { Injectable } from '@nestjs/common';
import { IHistoryService } from './history-service.interface';
import { IHistory } from './history.interface';

@Injectable()
export class HistoryService implements IHistoryService {
  private history = {
    id: 1,
    text: 'history',
    todoId: 1,
    isDel: 0,
    operateType: 'add',
    time: new Date(),
  };

  async getHistory(): Promise<IHistory[]> {
    return [this.history];
  }

  async addHistory(history: IHistory): Promise<boolean> {
    return true;
  }

  async delHistory(id: any): Promise<boolean> {
    return true;
  }

  async queryHistory(id: any): Promise<IHistory[]> {
    return [this.history];
  }
}
