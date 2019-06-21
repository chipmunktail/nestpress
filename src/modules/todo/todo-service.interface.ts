import { Todo } from './todo.interface';

export interface ITodoService {
  getTodo(): Promise<[Todo]>;
  addTodo(todo: Todo): Promise<boolean>;
  delTodo(id: any): Promise<boolean>;
  updateTodo(todo: Todo): Promise<boolean>;
  queryTodo(id: any): Promise<[Todo]>;
}
