import { Category } from './category.interface';

export interface ICategoryService {
  getCategory(): Promise<Category>;
  addCategory(): Promise<any>;
  delCategory(): Promise<any>;
  updateCategory(): Promise<any>;
  queryCategory(params: any): Promise<Category>;
}
