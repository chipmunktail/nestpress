import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    console.log('enter error filter');
    // console.log(response);
    // console.log(request);
    // console.log(status);
    // console.log(exception.message); // statusCode error message
    const { statusCode, error, message } = exception.message;
    const data = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    };

    if (status === HttpStatus.NOT_FOUND) {
      data.error = `资源不存在`;
      data.message = `接口 ${request.method} -> ${request.url} 无效`;
    }
    response
      .status(status)
      .json(data);
  }
}
