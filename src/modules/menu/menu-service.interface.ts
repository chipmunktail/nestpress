import { Menu } from './menu.interface';

export interface IMenuService {
  getMenu(): Promise<[Menu]>;
  addMenu(menu: Menu): Promise<boolean>;
  delMenu(id: any): Promise<boolean>;
  updateMenu(menuDto: Menu): Promise<boolean>;
  queryMenu(id: any): Promise<[Menu]>;
}
