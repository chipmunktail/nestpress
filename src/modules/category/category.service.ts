import { Injectable } from '@nestjs/common';
import { ICategoryService } from './category-service.interface';
import { Category } from './category.interface';

@Injectable()
export class CategoryService implements ICategoryService {
  private category = {
    id: 1,
    text: 'test',
    userId: 1,
    isDel: 1,
    isPub: 1,
  };

  async getCategory(): Promise<[Category]> {
    return [this.category];
  }

  async addCategory(): Promise<boolean> {
    return true;
  }

  async delCategory(id: any): Promise<boolean> {
    return true;
  }

  async updateCategory(id: any): Promise<boolean> {
    return true;
  }

  // todo params: number
  async queryCategory(id: any): Promise<[Category]> {
    return [this.category];
  }
}
