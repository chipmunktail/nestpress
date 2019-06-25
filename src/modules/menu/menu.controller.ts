import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { IMenu } from './menu.interface';
import { MenuDto } from './menu.dto';

@Controller('menu')
export class MenuController {
  constructor(readonly menuServise: MenuService) {}
  @Get()
  async getMenu(): Promise<IMenu[]> {
    return await this.menuServise.getMenu();
  }
  @Post()
  async addMenu(@Body() menu: IMenu): Promise<boolean> {
    return await this.menuServise.addMenu(menu);
  }
  @Delete()
  async delMenu(@Query() id): Promise<boolean> {
    return await this.menuServise.delMenu(id);
  }
  @Put()
  async updateMenu(@Body() menu: IMenu): Promise<boolean> {
    return await this.menuServise.updateMenu(menu);
  }
  @Get(':id')
  async queryMenu(@Param() id): Promise<IMenu[]> {
    return await this.menuServise.queryMenu(id);
  }
}
