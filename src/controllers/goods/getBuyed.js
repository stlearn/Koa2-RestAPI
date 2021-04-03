import goodsService from '../../services/goods/goodsService'
import userService from '../../services/user/userService'
export default async (ctx)=> {

  //用户id
  const userid = ctx.id;

  const goods = await goodsService.getGoodsBuyed(userid);

  let res = new Array();

  for (const g of goods) {
    const user = await userService.getUserInfo(g.seller_id);
    const owner = {
      name:user.name,
      avatar:user.avatar
    }
    let a = g.dataValues;
    a.owner = owner;
    res.push(a);
  }

  ctx.body = res;
}
