import { IHistory } from './history.interface';

export interface IHistoryService {
  getHistory(): Promise<IHistory[]>;
  addHistory(history: IHistory): Promise<boolean>;
  delHistory(id: any): Promise<boolean>;
  queryHistory(id: any): Promise<IHistory[]>;
}
