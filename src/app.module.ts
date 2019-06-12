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

@Module({
  controllers: [AppController, UsersController, TagsController],
  providers: [AppService, UsersService, /*{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }*/],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware /*, CorsMiddleware*/)
      .forRoutes('users');
  }
}
