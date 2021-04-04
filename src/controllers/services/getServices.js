const serviceService = require("../../services/services/servicesService")
import userService from '../../services/user/userService'
export default async (ctx)=>{

  const query = ctx.query;

  //用户id
  const userid = ctx.id;
  //记录结果
  let res;
  /***
   * 小区时可使用属性community kind
   * 附近时可使用属性经纬度和距离 kind
   */
  if(query.location==='小区'){
    //获取结果
    res = await serviceService.getServicesByCommunity(query.community,query.kind,userid);
  }else{ //附近

    res = await serviceService.getServicesByDistance(query.distance,query.longitude,query.latitude,query.kind,userid);
  }

  //添加属性
  for(let i=0;i<res.length;i++){
    const user = await userService.getUserInfo(res[i].provider);
    res[i].dataValues.avatar = user.avatar;
  }

  ctx.body = res;
}
