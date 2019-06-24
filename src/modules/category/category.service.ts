import { Injectable } from '@nestjs/common';
import { ICategoryService } from './category-service.interface';
import { Category } from './category.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService implements ICategoryService {
  private category = {
    id: 1,
    text: 'test',
    userId: 1,
    isDel: 1,
    isPub: 1,
  };
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}
  async getCategory(): Promise<Category[]> {
    // return [this.category];
    return await this.categoryRepository.find();
  }

  async addCategory(): Promise<boolean> {
    return true;
  }

  async delCategory(id: any): Promise<boolean> {
    return true;
  }

  async updateCategory(category: Category): Promise<boolean> {
    return true;
  }

  // todo params: number
  async queryCategory(id: any): Promise<Category[]> {
    return [this.category];
  }
}
