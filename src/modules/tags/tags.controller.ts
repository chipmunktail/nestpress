import { Controller, Get, Res } from '@nestjs/common';

@Controller('tags')
export class TagsController {
  @Get()
  getTags(): any[] {
    return ['tags1', 'tags2'];
  }
}
