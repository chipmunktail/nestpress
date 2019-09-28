import { Injectable } from '@nestjs/common';
import { IMenuService } from './menu-service.interface';
import { IMenu } from './menu.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { Connection } from 'typeorm';

@Injectable()
export class MenuService implements IMenuService {
  private menu = {
    id: 1,
    uuid: '6c84fb90-12c4-11e1-840d-7b25c5ee775b',
    text: 'menu',
    categoryId: 'xxxxxx',
    isDel: 0,
  };
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}
  async getMenu(query): Promise<IMenu[]> {
    return await this.menuRepository.find({categoryId: query.categoryId});
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
