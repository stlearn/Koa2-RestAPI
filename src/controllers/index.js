import upload from './upload'
import login from './user/loginController'
import goods from "./goods/addGoodsController"
import updateLocation from "./user/updateLocation"
import getgoods from './goods/getgoods'
import getgoodsdetail from './goods/getGoodsDetail'
import getOnSale from './goods/getOnSale'
import getSold from './goods/getSold'
import getBuyed from './goods/getBuyed'
import removeFavorites from './favorites/removeFavorites'
import addFavorites from './favorites/addFavorites'
import isFavorites from './favorites/isFavorites'
import getFavorites from './favorites/getFavorites'
import addServiceController from './services/addServiceController'
import getProvide from './services/getProvide'
import getUsed from './services/getUsed'
import getServiceDetails from './services/getServiceDetails'
import getServices from './services/getServices'
import serviceAddFavorite from './serviceFavorites/addFavorites'
import serviceRemoveFavorite from './serviceFavorites/removeFavorites'
import serviceIsFavorite from './serviceFavorites/isFavorites'
import serviceGetFavorite from './serviceFavorites/getFavorites'
//测试接口
import testController from "./testController"
import getMessageCount from './message/getMessageCount'
import getMessages from './message/getMessages'
import sendMessage from './message/sendMessage'

export default {
  upload,
  login,
  goods,
  updateLocation,
  getgoods,
  getgoodsdetail,
  testController,
  getOnSale,
  getSold,
  getBuyed,
  addFavorites,
  isFavorites,
  removeFavorites,
  getFavorites,
  addServiceController,
  getUsed,
  getProvide,
  getServices,
  getServiceDetails,
  serviceAddFavorite,
  serviceGetFavorite,
  serviceIsFavorite,
  serviceRemoveFavorite,
  getMessageCount,
  getMessages,
  sendMessage
}
