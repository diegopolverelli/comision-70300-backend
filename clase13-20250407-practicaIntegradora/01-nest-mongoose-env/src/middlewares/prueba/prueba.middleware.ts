import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PruebaMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    Logger.verbose(`Middleware de prueba: fecha: ${new Date().toUTCString()} | url: ${req.url} | method: ${req.method}`)

    next();
  }
}
