import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { IHistory } from './history.interface';
import { HistoryDto } from './history.dto';

@Controller('history')
export class HistoryController {
  constructor(readonly historyServise: HistoryService) {}
  @Get()
  async getHistory(): Promise<IHistory[]> {
    return await this.historyServise.getHistory();
  }
  @Post()
  async addHistory(@Body() history: IHistory): Promise<boolean> {
    return await this.historyServise.addHistory(history);
  }
  @Delete()
  async delHistory(@Query() id): Promise<boolean> {
    return await this.historyServise.delHistory(id);
  }
  @Get(':id')
  async queryHistory(@Param() id): Promise<IHistory[]> {
    return await this.historyServise.queryHistory(id);
  }
}
