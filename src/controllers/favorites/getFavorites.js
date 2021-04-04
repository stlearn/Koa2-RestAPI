import userService from '../../services/user/userService'

const favoritesService = require("../../services/favoritesService")
const goodsService = require("../../services/goods/goodsService")

export default async (ctx)=>{

  const user_id = ctx.id;

  //获取收藏列表
  const fs = await favoritesService.getFavorites(user_id);

  let res = new Array();

  for (const f of fs) {
    const goods = await goodsService.getGoodsById(f.goods_id);
    const user = await userService.getUserInfo(goods.seller_id);
    const owner = {
      name:user.name,
      avatar:user.avatar
    }
    let a = goods.dataValues;
    a.owner = owner;
    res.push(a);
  }

  ctx.body = res;

}
