import { Category } from './category.interface';

export interface ICategoryService {
  getCategory(): Promise<[Category]>;
  addCategory(): Promise<boolean>;
  delCategory(id: any): Promise<boolean>;
  updateCategory(id: any): Promise<boolean>;
  queryCategory(id: any): Promise<[Category]>;
}
