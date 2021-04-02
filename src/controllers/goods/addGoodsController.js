const GoodsService=require("../../services/goods/goodsService")

export default async (ctx)=> {
  //取出数据
  let data = ctx.request.body.data;

  //定义数据
  const goods={
    name:data.title,
    price:data.price,
    longitude:data.longitude,
    latitude:data.latitude,
    images:data.images,
    description:data.description,
    kind:data.kind
  }
  const owner={
    id:ctx.id,
  }

  //调用数据库写入
  let res = await GoodsService.addGoods(owner, goods);

  //写返回值
  ctx.body={status:200};

}
