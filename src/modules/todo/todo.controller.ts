import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  async getTodo() {
    return [];
  }
  @Post()
  async addTodo() {
    return [];
  }
  @Delete()
  async delTodo() {
    return [];
  }
  @Put()
  async updateTodo() {
    return [];
  }
  @Get(':id')
  async queryTodo(@Param() id) {
    return [];
  }
}
