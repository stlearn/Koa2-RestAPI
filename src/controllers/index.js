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
//测试接口
import testController from "./testController"

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
  getFavorites
}
