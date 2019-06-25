import { Injectable } from '@nestjs/common';
import { ICategoryService } from './category-service.interface';
import { ICategory } from './category.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

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
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getCategory(): Promise<ICategory[]> {
    // return [this.category];
    return await this.categoryRepository.find();
  }

  async addCategory(): Promise<boolean> {
    return true;
  }

  async delCategory(id: any): Promise<boolean> {
    return true;
  }

  async updateCategory(category: ICategory): Promise<boolean> {
    return true;
  }

  // todo params: number
  async queryCategory(id: any): Promise<ICategory[]> {
    return [this.category];
  }
}
