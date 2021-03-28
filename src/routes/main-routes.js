import KoaRouter from 'koa-router'
import controllers from '../controllers'

const router = new KoaRouter()

export default router
  .post('/upload', controllers.upload)
  .post('/login',controllers.login)
  .get('/publish/addgoods',controllers.goods)
  .get('/test',controllers.testController)
