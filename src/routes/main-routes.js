import KoaRouter from 'koa-router'
import controllers from '../controllers'

const router = new KoaRouter()

export default router
  .post('/upload', controllers.upload)
  .post('/login',controllers.login)
  .post('/user/updatelocation',controllers.updateLocation)
  .get('/goods/getgoods',controllers.getgoods)
  .get('/goods/getgoodsdetail',controllers.getgoodsdetail)
  .get('/goods/getonsale',controllers.getOnSale)
  .post('/publish/addgoods',controllers.goods)
  .all('/test',controllers.testController)
