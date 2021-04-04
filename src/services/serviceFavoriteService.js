import { Op, QueryTypes } from 'sequelize'
import sequelize from '../lib/sequelize'
const getService = require("../models/services")
const getUser = require('../models/user')
const getServiceFavorite = require('../models/service_favorites')

//导入model
const Favorites = getServiceFavorite(sequelize);

//导入辅助model
const service = getService(sequelize);
const User = getUser(sequelize);

/**
 * 添加收藏
 */
export const addFavorites = async function (user_id,service_id) {
  const f = await Favorites.create({
    user_id:user_id,
    service_id:service_id
  });
  return f;
}

/**
 * 删除收藏
 * @param user_id
 * @param goods_id
 */
export const removeFavorites = async function (user_id,Service_id) {
  const f = await Favorites.destroy({
    where:{
      user_id:user_id,
      service_id:Service_id
    }
  });
  return f;
}

/**
 * 检查是否收藏了
 * @param user_id
 * @param goods_id
 */
export const isFavorites = async function (user_id,service_id) {
  const f = await Favorites.findAll({
    where:{
      user_id:user_id,
      service_id:service_id
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
