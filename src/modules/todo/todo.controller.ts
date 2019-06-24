import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(readonly todoService: TodoService) {
  }

  @Get()
  async getTodo(): Promise<Todo[]> {
    return this.todoService.getTodo();
  }

  @Post()
  async addTodo(@Body() todo: Todo): Promise<boolean> {
    return this.todoService.addTodo(todo);
  }

  @Delete()
  async delTodo(@Query() id: any): Promise<boolean> {
    return this.todoService.delTodo(id);
  }

  @Put()
  async updateTodo(@Body() todo: Todo): Promise<boolean> {
    return this.todoService.updateTodo(todo);
  }

  @Get(':id')
  async queryTodo(@Param() id): Promise<Todo[]> {
    return this.todoService.queryTodo(id);
  }
}
