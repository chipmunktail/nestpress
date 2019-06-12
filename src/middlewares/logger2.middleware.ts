// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class Logger2Middleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     next();
//   }
// }
export function Logger2Middleware(req, res, next) {
  console.log(`logger for every router`);
  next();
}
