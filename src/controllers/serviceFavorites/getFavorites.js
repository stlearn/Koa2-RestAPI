import userService from '../../services/user/userService'

const favoritesService = require("../../services/serviceFavoriteService")
const serviceService = require("../../services/services/servicesService")

export default async (ctx)=>{

  const user_id = ctx.id;

  //获取收藏列表
  const fs = await favoritesService.getFavorites(user_id);

  let res = new Array();

  for (const f of fs) {
    const service = await serviceService.getServiceById(f.service_id);
    const user = await userService.getUserInfo(service.provider);
    const owner = {
      name:user.name,
      avatar:user.avatar
    }
    let a = service.dataValues;
    a.owner = owner;
    res.push(a);
  }

  ctx.body = res;

}
