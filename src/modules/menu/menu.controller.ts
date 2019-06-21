import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.interface';
import { MenuDto } from './menu.dto';

@Controller('menu')
export class MenuController {
  constructor(readonly menuServise: MenuService) {}
  @Get()
  async getMenu(): Promise<[Menu]> {
    return await this.menuServise.getMenu();
  }
  @Post()
  async addMenu(@Body() menu: Menu): Promise<boolean> {
    return await this.menuServise.addMenu(menu);
  }
  @Delete()
  async delMenu(@Query() id): Promise<boolean> {
    return await this.menuServise.delMenu(id);
  }
  @Put()
  async updateMenu(@Body() menu: Menu): Promise<boolean> {
    return await this.menuServise.updateMenu(menu);
  }
  @Get(':id')
  async queryMenu(@Param() id): Promise<[Menu]> {
    return await this.menuServise.queryMenu(id);
  }
}
