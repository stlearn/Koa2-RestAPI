import Koa2 from 'koa'
import KoaBody from 'koa-body'
import KoaStatic from 'koa-static2'
import KoaJson from 'koa-json'
import {  System as SystemConfig } from './config'
import path from 'path'
import MainRoutes from './routes/main-routes'
import ErrorRoutesCatch from './middleware/ErrorRoutesCatch'
import ErrorRoutes from './routes/error-routes'
import jwt from 'koa-jwt'
import fs from 'fs'
import TokenPrase from './middleware/TokenPrase'
// import PluginLoader from './lib/PluginLoader'

const app = new Koa2()
const env = process.env.NODE_ENV || 'development' // Current mode
if (env === 'development') { // logger
  app.use((ctx, next) => {
    const start = new Date()
    return next().then(() => {
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
      console.log('----------------------------------------line-----------------------------------------')
    })
  })
}
//读取token加密秘钥
const publicKey = fs.readFileSync(path.join(__dirname, '../publicKey.pub'))

app
  //设置跨域
  .use((ctx, next) => {
    if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
      ctx.set('Access-Control-Allow-Origin', '*')
    } else {
      ctx.set('Access-Control-Allow-Origin', SystemConfig.HTTP_server_host)
    }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
    return next()
  })
  //未授权验证
  .use(ErrorRoutesCatch())
  //静态文件访问
  .use(KoaStatic('assets', path.resolve(__dirname, '../assets'))) // Static resource
  //授权控制中间件，设置路由过滤
  .use(jwt({ secret: publicKey }).unless({ path: [/^\/public|\/login|\/assets/] }))
  //解析token
  .use(TokenPrase())
  //解析以及文件上传功能中间件
  .use(KoaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'], // parse GET, HEAD, DELETE requests
    formidable: {
      uploadDir: path.join(__dirname, '../assets/uploads/images'),//设置文件上传目录
      keepExtensions:true, //保持文件后缀
      onFileBegin:(name,file)=>{
        console.log(name);
        console.log(file);
      }
    },
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
  })) // Processing request
  // .use(PluginLoader(SystemConfig.System_plugin_path))
  .use(KoaJson())
  //路由
  .use(MainRoutes.routes())
  .use(MainRoutes.allowedMethods())
  //空白路由显示404
  .use(ErrorRoutes())

app.listen(SystemConfig.API_server_port)

console.log('Now start API server on http://localhost:' + SystemConfig.API_server_port + '...')

export default app


