import goodsService from '../../services/goods/goodsService'
import userService from '../../services/user/userService'
export default async (ctx)=>{

  const query = ctx.query;

  //用户id
  const userid = ctx.id;
  //记录结果
  let res;
  /***
   * 小区时可使用属性community kind
   * 附近时可使用属性经纬度和距离 kind
   */
  if(query.location==='小区'){
    //获取结果
    res = await goodsService.getGoodsByCommunity(query.community,query.kind,userid,query.search_key);
  }else{ //附近

    res = await goodsService.getGoodsByDistance(query.distance,query.longitude,query.latitude,query.kind,userid,query.search_key);
  }

  //添加属性
  for(let i=0;i<res.length;i++){
    const user = await userService.getUserInfo(res[i].seller_id);
    res[i].dataValues.avatar = user.avatar;
  }

  ctx.body = res;
}
