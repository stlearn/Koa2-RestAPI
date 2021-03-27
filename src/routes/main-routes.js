import KoaRouter from 'koa-router'
import controllers from '../controllers'

const router = new KoaRouter()

export default router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不经过权限认证
  .post('/upload', controllers.upload)
  //测试
  .all('/public/test',controllers.test)
  .post('/user/login',controllers.login)
