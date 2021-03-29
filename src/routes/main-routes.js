import KoaRouter from 'koa-router'
import controllers from '../controllers'

const router = new KoaRouter()

export default router
  .post('/upload', controllers.upload)
  .post('/login',controllers.login)
  .post('/user/updatelocation',controllers.updateLocation)
  .get('/goods/getgoods',controllers.getgoods)
  .post('/publish/addgoods',controllers.goods)
  .all('/test',controllers.testController)
