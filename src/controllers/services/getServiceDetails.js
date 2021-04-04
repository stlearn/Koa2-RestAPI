const serviceService = require("../../services/services/servicesService")
const PictureService=require("../../services/services/pictureService")
const UserService = require("../../services/user/userService")
export default async (ctx)=> {
  //取出数据
  let serviceId = ctx.query.service_id;

  //调用数据库查询商品信息
  let res = await serviceService.getServiceDetail(serviceId);

  //查询商品图片信息
  let pics = await PictureService.getByServicesId(serviceId);

  //查询卖主信息
  let owner = await UserService.getUserInfo(res.provider);

  //写返回值
  ctx.body={goods:res,pictures:pics,owner:owner};

}
