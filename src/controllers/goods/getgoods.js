import goodsService from '../../services/goods/goodsService'
export default async (ctx)=>{

  const query = ctx.query;

  //小区
  if(query.location==='小区'){
    ctx.body = await goodsService.getAllGoods(query.kind);
  }else{ //附近

  }
}
