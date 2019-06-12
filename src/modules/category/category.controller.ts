import { Controller, Get, Param, Post } from '@nestjs/common';
import { Category } from './category.interface';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(readonly categoryService: CategoryService) {
  }
  @Get()
  async getCategory(): Promise<Category> {
    return await this.categoryService.getCategory();
  }
  @Post('/add')
  async addCategory(): Promise<any> {
    return await this.categoryService.addCategory();
  }
  @Post('/del')
  async delCategory(): Promise<any> {
    return await this.categoryService.delCategory();
  }
  @Post('/update')
  async updateCategory(): Promise<any> {
    return await this.categoryService.updateCategory();
  }
  @Get(':id')
  async queryCategory(@Param() params): Promise<Category> {
    return await this.categoryService.queryCategory(params);
  }
}
