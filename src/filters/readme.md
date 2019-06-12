# filter 异常过滤器
就是个过滤器，捕获异常，加以处理，返回给用户

## 作用
处理异常

## 使用方法
写好逻辑，导出

在mian.ts中引用
```javascript
import { HttpExceptionFilter } from './filters/filter.filter';
app.useGlobalFilters(new HttpExceptionFilter());
```

在其他代码中（如路由业务），使用
```javascript
import { UnauthorizedException } from '@nestjs/common';
throw new UnauthorizedException();
```
