import { json } from 'sequelize'

const getGoods = require('../../models/goods');
import sequelize from '../../lib/sequelize'
import { addPictures } from './pictureService'

const Goods = getGoods(sequelize);

const addGoods = async function(owner,goods_info){
  const goods = await Goods.create({
    seller_id: owner.id,
    price:goods_info.price,
    name :goods_info.name,
    saled:false,
    up_time: Date.now()+8 * 60 * 60 * 1000,
    imageUrl: goods_info.images[0],
    longitude: goods_info.longitude,
    latitude:goods_info.latitude
  });
  console.log(JSON.stringify(goods));

  //将所有图片添加到pic表
  addPictures(goods.id,goods_info.images);
}

exports.addGoods=addGoods;
