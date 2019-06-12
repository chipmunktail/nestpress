import { Controller, Get, Req, HttpCode, Param, Post, Body, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
// import {ValidationPipe} from '../../pipes/validation.pipe';
import { CreateUserDto } from './user.dto';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import {LoggingInterceptor} from '../../interceptors/logger.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get(':id')
  @HttpCode(202)
  getUsers(@Param('id') id, @Req() request: any) {
    console.log('COMMING GET USERS');
    return this.usersService.getUsers(request);
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserDto, @Req() request: any) {
  //   return this.usersService.createUser(createUserDto, request);
  // }

  @Post()
  @Roles('admin')
  @UseGuards(RolesGuard)
  async create(@Body() createUserDto: CreateUserDto, @Req() request: any) {
    return this.usersService.createUser(createUserDto, request);
  }
}
