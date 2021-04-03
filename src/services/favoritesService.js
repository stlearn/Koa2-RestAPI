import { Op, QueryTypes } from 'sequelize'
import sequelize from '../lib/sequelize'
const getGoods = require('../models/goods');
const getUser = require('../models/user')
const getFavorite = require('../models/favorites')

//导入model
const Favorites = getFavorite(sequelize);

//导入辅助model
const Goods = getGoods(sequelize);
const User = getUser(sequelize);

/**
 * 添加收藏
 */
export const addFavorites = async function (user_id,goods_id) {
  const f = await Favorites.create({
    user_id:user_id,
    goods_id:goods_id
  });
  return f;
}

/**
 * 删除收藏
 * @param user_id
 * @param goods_id
 */
export const removeFavorites = async function (user_id,goods_id) {
  const f = await Favorites.destroy({
    where:{
      user_id:user_id,
      goods_id:goods_id
    }
  });
  return f;
}

/**
 * 检查是否收藏了
 * @param user_id
 * @param goods_id
 */
export const isFavorites = async function (user_id,goods_id) {
  const f = await Favorites.findAll({
    where:{
      user_id:user_id,
      goods_id:goods_id
    }
  });
  return f.length>0;
}

/**
 * 获取收藏列表
 * @param user_id
 * @returns {Promise<boolean>}
 */
export const getFavorites = async function (user_id) {
  const f = await Favorites.findAll({
    where:{
      user_id:user_id,
    }
  });
  return f;
}
