const favoritesService = require("../../services/favoritesService")

export default async (ctx)=>{

  const user_id = ctx.id;
  const goods_id = ctx.query.goods_id

  ctx.body = favoritesService.removeFavorites(user_id,goods_id);

}
