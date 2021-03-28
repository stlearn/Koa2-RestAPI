//专门用来测试代码的接口
import {getByGoodsId} from '../services/goods/pictureService'
export default async (ctx)=>{
  console.log(ctx.id)
  console.log(ctx.query.id);
}
