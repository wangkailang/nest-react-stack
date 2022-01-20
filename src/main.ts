import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpInterceptor } from './http.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('示例')
    .setDescription('描述')
    .setVersion('1.0')
    .addTag('示例')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(new HttpInterceptor());

  app.enableCors({ origin: true, credentials: true }); // 允许跨域和传递cookie
  app.use(cookieParser()); // cookie 格式化插件

  await app.listen(3001);
}
bootstrap();
