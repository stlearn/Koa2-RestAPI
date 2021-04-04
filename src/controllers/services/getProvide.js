import userService from '../../services/user/userService'
const serviceService = require("../../services/services/servicesService")
export default async (ctx)=> {

  //用户id
  const userid = ctx.id;

  const user = await userService.getUserInfo(userid);
  const owner = {
    name:user.name,
    avatar:user.avatar
  }
  const service = await serviceService.getServiceOnSale(userid);

  let res = new Array();

  service.forEach((g)=>{
    let a = g.dataValues;
    a.owner = owner;
    res.push(a);
  });

  ctx.body = res;
}
