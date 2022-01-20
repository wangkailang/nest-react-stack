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
