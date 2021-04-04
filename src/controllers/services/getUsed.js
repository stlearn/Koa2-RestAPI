const purchaseService = require("../../services/services/purchaseService")
const serviceService = require("../../services/services/servicesService")
import userService from '../../services/user/userService'
export default async (ctx)=> {

  //用户id
  const userid = ctx.id;

  const purchase = await purchaseService.getPurchaseByUserId(userid);

  console.log(purchase);

  let res = new Array();

  for (const p of purchase) {
    const service = await serviceService.getServiceById(p.service_id);
    const user = await userService.getUserInfo(service.provider);
    const owner = {
      name:user.name,
      avatar:user.avatar
    }

    let a = service.dataValues;
    a.provide_time = p.provide_time;
    a.owner = owner;
    res.push(a);
  }

  ctx.body = res;
}
