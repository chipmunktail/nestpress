import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger2Middleware } from './middlewares/logger2.middleware';
import { HttpExceptionFilter } from './filters/filter.filter';
import {ValidationPipe} from './pipes/validation.pipe';
import {AuthGuard} from './guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(Logger2Middleware);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}

bootstrap();
