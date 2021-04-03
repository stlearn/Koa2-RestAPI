import goodsService from '../../services/goods/goodsService'
import userService from '../../services/user/userService'
export default async (ctx)=> {

  //用户id
  const userid = ctx.id;

  const user = await userService.getUserInfo(userid);
  const owner = {
    name:user.name,
    avatar:user.avatar
  }
  const goods = await goodsService.getGoodsSold(userid);

  let res = new Array();

  goods.forEach((g)=>{
    let a = g.dataValues;
    a.owner = owner;
    res.push(a);
  });

  ctx.body = res;
}
