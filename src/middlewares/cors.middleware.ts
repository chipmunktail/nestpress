/**
 * Cors middleware.
 * @file CORS 中间件
 * @module middleware/cors
 * @author Surmon <https://github.com/surmon-china>
 */

import { Injectable, NestMiddleware, HttpStatus, RequestMethod } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * @class CorsMiddleware
 * @classdesc 用于处理 CORS 跨域
 */
@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next) {
    const getMethod = method => RequestMethod[method];
    const origins = request.headers.origin;
    const origin = (Array.isArray(origins) ? origins[0] : origins) || '';
    const allowedOrigins = ['http://localhost:3000', 'http://other.com'];
    const allowedMethods = [RequestMethod.GET, RequestMethod.HEAD, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.POST, RequestMethod.DELETE];
    const allowedHeaders = ['Authorization', 'Origin', 'No-Cache', 'X-Requested-With',
      'If-Modified-Since', 'Pragma', 'Last-Modified', 'Cache-Control', 'Expires', 'Content-Type', 'X-E4M-With'];

    // Allow Origin
    if (!origin || allowedOrigins.includes(origin)) {
      response.setHeader('Access-Control-Allow-Origin', origin || '*');
    }

    // Headers
    response.header('Access-Control-Allow-Headers', allowedHeaders.join(','));
    response.header('Access-Control-Allow-Methods', allowedMethods.map(getMethod).join(','));
    response.header('Access-Control-Max-Age', '1728000');
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.header('X-Powered-By', `Nodepress 1.0`);

    // OPTIONS Request
    if (request.method === getMethod(RequestMethod.OPTIONS)) {
      return response.sendStatus(HttpStatus.NO_CONTENT);
    } else {
      return next();
    }
  }
}
