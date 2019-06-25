import { ITodo } from './todo.interface';

export interface ITodoService {
  getTodo(): Promise<ITodo[]>;
  addTodo(todo: ITodo): Promise<boolean>;
  delTodo(id: any): Promise<boolean>;
  updateTodo(todo: ITodo): Promise<boolean>;
  queryTodo(id: any): Promise<ITodo[]>;
}
