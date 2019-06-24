import { Body, Controller, Delete, Get, Head, Headers, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { Category } from './category.interface';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import { type } from 'os';

@Controller('category')
export class CategoryController {
  constructor(readonly categoryService: CategoryService) {
  }
  @Get()
  async getCategory(): Promise<Category[]> {
    await this.categoryService.getCategory()
      .then(res => {
        console.log(res, '=====');
      })
      .catch(err => {
        console.log(err, '/////');
      })
    return await this.categoryService.getCategory();
  }
  @Post()
  async addCategory(@Body() category: CategoryDto): Promise<boolean> {
    return await this.categoryService.addCategory();
  }
  @Delete()
  async delCategory(@Query('id', new ParseIntPipe()) id): Promise<boolean> {
    return await this.categoryService.delCategory(id);
  }
  @Put()
  async updateCategory(@Body() category: Category): Promise<boolean> {
    return await this.categoryService.updateCategory(category);
  }
  @Get(':id')
  async queryCategory(@Param('id', new ParseIntPipe()) id): Promise<Category[]> {
    return await this.categoryService.queryCategory(id);
  }
}
