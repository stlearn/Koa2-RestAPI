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
  .get('/favorites/serviceaddfavorites',controllers.serviceAddFavorite)
  .get('/favorites/serviceisfavorites',controllers.serviceIsFavorite)
  .get('/favorites/serviceremovefavorites',controllers.serviceRemoveFavorite)
  .get('/favorites/servicegetfavorites',controllers.serviceGetFavorite)
  .post('/publish/addgoods',controllers.goods)
  .post('/service/addservice',controllers.addServiceController)
  .get('/service/getservices',controllers.getServices)
  .get('/service/getprovide',controllers.getProvide)
  .get('/service/getused',controllers.getUsed)
  .get('/service/getservicedetails',controllers.getServiceDetails)
  .all('/test',controllers.testController)
