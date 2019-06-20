import { Injectable } from '@nestjs/common';
import { IMenuService } from './menu-service.interface';
import { Menu } from './menu.interface';

@Injectable()
export class MenuService implements IMenuService {
  private menu = {
    id: 1,
    text: 'menu',
    categoryId: 1,
    isDel: 0,
  };

  async getMenu(): Promise<[Menu]> {
    return [this.menu];
  }

  async addMenu(menu: Menu): Promise<boolean> {
    return true;
  }

  async delMenu(id: any): Promise<boolean> {
    return true;
  }

  async updateMenu(menu: Menu): Promise<boolean> {
    return true;
  }

  async queryMenu(id: any): Promise<[Menu]> {
    return [this.menu];
  }
}
