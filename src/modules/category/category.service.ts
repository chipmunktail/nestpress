import { Injectable, Param } from '@nestjs/common';
import { ICategoryService } from './category-service.interface';
import { Category } from './category.interface';

@Injectable()
export class CategoryService implements ICategoryService {
  async getCategory(): Promise<Category> {
    return {
      id: 1,
      text: 'test',
      userId: 1,
      isDel: 1,
      isPub: 1,
    };
  }
  async addCategory(): Promise<any> {
    return [];
  }
  async delCategory(): Promise<any> {
    return [];
  }
  async updateCategory(): Promise<any> {
    return [];
  }
  // todo params: number
  async queryCategory(params: any): Promise<Category> {
    return {
      id: params.id,
      text: 'test',
      userId: 1,
      isDel: 1,
      isPub: 1,
    };
  }
}
