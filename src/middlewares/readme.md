# middleware 中间件
中间件是一个在路由处理器之前被调用的函数。 中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的 next() 中间件函数。 next() 中间件函数通常由名为 next 的变量表示。

## 作用
- logger 
- cors 
- helmet
```javascript
npm i helmet -s
```

