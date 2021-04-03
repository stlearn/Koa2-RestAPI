import upload from './upload'
import login from './user/loginController'
import goods from "./goods/addGoodsController"
import updateLocation from "./user/updateLocation"
import getgoods from './goods/getgoods'
import getgoodsdetail from './goods/getGoodsDetail'
import getOnSale from './goods/getOnSale'
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
  getOnSale
}
