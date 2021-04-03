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
  .get('/goods/getsold',controllers.getSold)
  .get('/goods/getbuyed',controllers.getBuyed)
  .get('/favorites/addfavorites',controllers.addFavorites)
  .get('/favorites/isfavorites',controllers.isFavorites)
  .get('/favorites/removefavorites',controllers.removeFavorites)
  .get('/favorites/getfavorites',controllers.getFavorites)
  .post('/publish/addgoods',controllers.goods)
  .all('/test',controllers.testController)
