import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  getUsers(request: any): string {
    return 'users list';
  }

  createUser(createUserDto: CreateUserDto, request): object {
    return { createUserDto, success: true };
  }
}
