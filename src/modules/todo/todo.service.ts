import { Injectable } from '@nestjs/common';
import { ITodoService } from './todo-service.interface';
import { ITodo } from './todo.interface';

@Injectable()
export class TodoService implements ITodoService {
  private todo = {
    id: 1,
    uuid: '6c84fb90-12c4-11e1-840d-7b25c5ee775c',
    text: 'todo',
    menuId: 1,
    isDel: 1,
  };

  async getTodo(): Promise<ITodo[]> {
    return [this.todo];
  }

  async addTodo(todo: ITodo): Promise<boolean> {
    return true;
  }

  async delTodo(id: any): Promise<boolean> {
    return true;
  }

  async updateTodo(todo: ITodo): Promise<boolean> {
    return true;
  }

  async queryTodo(id: any): Promise<ITodo[]> {
    return [this.todo];
  }
}
