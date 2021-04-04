const serviceService = require("../../services/services/servicesService")

export default async (ctx)=> {
  //取出数据
  let data = ctx.request.body.data;

  //定义数据
  const service={
    name:data.title,
    price:data.price,
    longitude:data.longitude,
    latitude:data.latitude,
    images:data.images,
    description:data.description,
    kind:data.kind,
    saled:false
  }
  const owner={
    id:ctx.id,
  }

  //调用数据库写入
  let res = await serviceService.addService(owner, service);

  //写返回值
  ctx.body={status:200};

}
