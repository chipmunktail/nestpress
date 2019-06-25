import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';
import { TagsController } from './modules/tags/tags.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { RolesGuard } from './guards/roles.guard';
// import { CorsMiddleware } from './middlewares/cors.middleware';
import { CategoryModule } from './modules/category/category.module';
import { MenuModule } from './modules/menu/menu.module';
import { TodoModule } from './modules/todo/todo.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';
// Typeorm

@Module({
  controllers: [AppController, UsersController, TagsController],
  providers: [AppService, UsersService, /*{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }*/],
  imports: [TypeOrmModule.forRoot(), CategoryModule, MenuModule, TodoModule, AuthModule],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware /*, CorsMiddleware*/)
      .forRoutes('users');
  }
}
