# JWT + passport 实现 Token 验证

## 名词解释

- JWT（JSON Web Token）允许我们在用户和服务器之间传递安全可靠信息的一种规范。
- Passport passport.js是Nodejs中的一个做登录验证的中间件，支持本地账号和第三方账号登陆验证（OAuth、OpenID 等）

### Passport

#### 策略（Strategy）

passport 模块本身不做认证，所有的认证方法都以策略模式封装为插件，需要某种认证时将其添加到 package.json 即可。

策略模式是一种设计模式，将算法和对象分离。

依据策略模式，passport 支持了众多的验证方案，包括 Basic、Digest、OAuth（1.0，和2.0的三种实现）、Bearer 等。

## 思路梳理

- 用户登陆，服务端校验用户名和密码，通过后创建 token 并设置在 cookie 中返回；
- 前端后续请求会自动携带 cookie
- 服务端通过中间件校验 token，通过后则正常响应
