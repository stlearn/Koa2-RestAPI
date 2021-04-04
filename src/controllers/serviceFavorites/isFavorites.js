const favoritesService = require("../../services/serviceFavoriteService")

export default async (ctx)=>{

  const user_id = ctx.id;
  const goods_id = ctx.query.goods_id;

  ctx.body = await favoritesService.isFavorites(user_id,goods_id);
}
