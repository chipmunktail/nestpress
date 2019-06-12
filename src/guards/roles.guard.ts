import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles, '====');
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const query = JSON.parse(JSON.stringify(request.body));
    console.log(query.roles);
    const hasRole = () => roles.includes(query.roles);
    return query.user && query.user && hasRole();
  }
}
