## 中间件

- 通过中间件注册 cookies

### API 注册 cookies

#### Express 添加 cookie 依赖和配置

```bash
yarn add cookie-parser
```

在 `main.ts` 文件中配置：

```ts
import * as cookieParser from 'cookie-parser';
app.enableCors({ origin: true, credentials: true });
app.use(cookieParser());
```

#### 新建 cookie 中间件

通过 nest cli middleware 新建 cookie 中间件

```
nx g @nrwl/nest:middleware cookie
```

修改 `src/cookie.middleware.ts` 文件，不存在 cookies 时抛出异常：

```ts
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.cookies.token) {
      next();
    } else {
      throw new UnauthorizedException();
    }
  }
}
```

在 `src/app.module.ts` 指定 books 路由处理 cookie 中间价逻辑:

```ts
import { CookieMiddleware } from './cookie.middleware';

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieMiddleware).forRoutes(...['books']);
  }
}
```

此时浏览器打开 books，发现报未认证异常：

```js
{
  statusCode: 401,
  message: "Unauthorized"
}
```

打开浏览器控制台 Application -> Cookies 添加一组数据 token 为 123，刷新可以正常获取到数据。


