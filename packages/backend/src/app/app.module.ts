import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksModule } from '../books/books.module';
import { CookieMiddleware } from '../cookie.middleware';
import { PrismaService } from '../prisma/prisma.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieMiddleware).forRoutes(...['books']);
  }
}
