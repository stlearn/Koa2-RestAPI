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
    latitude:goods_info.latitude,
    description:goods_info.description,
    kind:goods_info.kind
  });

  //将所有图片添加到pic表
  addPictures(goods.goods_id,goods_info.images);

  return goods;
}

//获取所有商品
const getAllGoods=async function (kind) {
  if(kind=='全部'){
    return Goods.findAll();
  }
  return Goods.findAll({
    where:{
      kind:kind
    }
  });
}
//根据小区名获取商品
const getGoodsByCommunity=function(community,kind){

}

//获取商品明细
const getGoodsDetail=async function(goodsid){
  return await Goods.findByPk(goodsid);
}
exports.addGoods=addGoods;
exports.getAllGoods=getAllGoods;
exports.getGoodsDetail=getGoodsDetail;
