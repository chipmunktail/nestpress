import { ICategory } from './category.interface';

export interface ICategoryService {
  getCategory(): Promise<ICategory[]>;
  addCategory(): Promise<boolean>;
  delCategory(id: any): Promise<boolean>;
  updateCategory(category: ICategory): Promise<boolean>;
  queryCategory(id: any): Promise<ICategory[]>;
}
