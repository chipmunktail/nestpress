import { Injectable } from '@nestjs/common';
import { ITodoService } from './todo-service.interface';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService implements ITodoService {
  private todo = {
    id: 1,
    text: 'todo',
    menuId: 1,
    isDel: 1,
  };

  async getTodo(): Promise<[Todo]> {
    return [this.todo];
  }

  async addTodo(todo: Todo): Promise<boolean> {
    return true;
  }

  async delTodo(id: any): Promise<boolean> {
    return true;
  }

  async updateTodo(todo: Todo): Promise<boolean> {
    return true;
  }

  async queryTodo(id: any): Promise<[Todo]> {
    return [this.todo];
  }
}
