import { IMenu } from './menu.interface';

export interface IMenuService {
  getMenu(query: any): Promise<IMenu[]>;
  addMenu(menu: IMenu): Promise<boolean>;
  delMenu(id: any): Promise<boolean>;
  updateMenu(menuDto: IMenu): Promise<boolean>;
  queryMenu(id: any): Promise<IMenu[]>;
}
