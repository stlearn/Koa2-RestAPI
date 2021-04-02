const GoodsService=require("../../services/goods/goodsService")
const PictureService=require("../../services/goods/pictureService")
const UserService = require("../../services/user/userService")
export default async (ctx)=> {
  //取出数据
  let goodsId = ctx.query.goods_id;

  //调用数据库查询商品信息
  let res = await GoodsService.getGoodsDetail(goodsId);

  //查询商品图片信息
  let pics = await PictureService.getByGoodsId(goodsId);

  //查询卖主信息
  let owner = await UserService.getUserInfo(res.seller_id);

  //写返回值
  ctx.body={goods:res,pictures:pics,owner:owner};

}
