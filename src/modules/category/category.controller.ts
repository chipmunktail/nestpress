import { Body, Controller, Delete, Get, Head, Headers, Param, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ICategory } from './category.interface';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
  constructor(readonly categoryService: CategoryService) {
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  async getCategory(): Promise<ICategory[]> {
    await this.categoryService.getCategory()
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
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
  async updateCategory(@Body() category: ICategory): Promise<boolean> {
    return await this.categoryService.updateCategory(category);
  }

  @Get(':id')
  async queryCategory(@Param('id', new ParseIntPipe()) id): Promise<ICategory[]> {
    return await this.categoryService.queryCategory(id);
  }
}
