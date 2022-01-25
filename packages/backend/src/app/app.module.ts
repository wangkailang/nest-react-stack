import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksModule } from '../books/books.module';
import { CookieMiddleware } from '../cookie.middleware';
import { PostsModule } from '../posts/posts.module';
import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BooksModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieMiddleware).forRoutes(...['books']);
  }
}
