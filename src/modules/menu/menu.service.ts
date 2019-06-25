import { Injectable } from '@nestjs/common';
import { IMenuService } from './menu-service.interface';
import { IMenu } from './menu.interface';

@Injectable()
export class MenuService implements IMenuService {
  private menu = {
    id: 1,
    text: 'menu',
    categoryId: 1,
    isDel: 0,
  };

  async getMenu(): Promise<IMenu[]> {
    return [this.menu];
  }

  async addMenu(menu: IMenu): Promise<boolean> {
    return true;
  }

  async delMenu(id: any): Promise<boolean> {
    return true;
  }

  async updateMenu(menu: IMenu): Promise<boolean> {
    return true;
  }

  async queryMenu(id: any): Promise<IMenu[]> {
    return [this.menu];
  }
}
