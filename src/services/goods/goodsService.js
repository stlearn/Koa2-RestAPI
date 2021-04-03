import { Op, QueryTypes } from 'sequelize'

const getGoods = require('../../models/goods');
const getUser = require('../../models/user')
import sequelize from '../../lib/sequelize'
import { addPictures } from './pictureService'

//距离计算组件
const haversine = require('haversine')

const Goods = getGoods(sequelize);
const User = getUser(sequelize);

/**
 * 添加商品
 * @param owner
 * @param goods_info
 * @returns {Promise<*>}
 */
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

/***
 * 获取所有商品（测试方法）
 * @param kind
 * @returns {Promise<*>}
 */
const getAllGoods=async function (kind,userid) {
  if(kind=='全部'){
    return Goods.findAll();
  }
  return Goods.findAll({
    where:{
      kind:kind,
      seller_id:{
        [Op.ne]:userid
      }
    }
  });
}
/**
 * 根据小区名获取商品
 * @param community
 * @param kind
 * @returns {Promise<*>}
 */
const getGoodsByCommunity=async function(community,kind,userid){
  let res;

  const user = await User.findAll({
    attributes:['id'],
    where:{
      community:community,
    }
  });

  let ids = new Array();
  user.forEach((u)=>{
    ids.push(u.dataValues.id);
  })

  if(kind=="全部"){
    res = await Goods.findAll({
      where:{
        seller_id: {
          [Op.in]:ids,
          [Op.ne]:userid
        },
        saled:false
      }
    });
  }else{
    res = await Goods.findAll({
      where:{
        seller_id: {
          [Op.in]:ids,
          [Op.ne]:userid
        },
        kind:kind,
        saled:false
      }
    });
  }
// 我们不需要在这里分解结果 - 结果会直接返回
  return res;
}

/**
 * 根据距离获取商品
 * @param distance
 * @param longitude
 * @param latitude
 * @param kind
 * @returns {Promise<*>}
 */
const getGoodsByDistance=async function(distance,longitude,latitude,kind,userid){
  let res;

  console.log(distance,longitude,latitude,kind);

  if(kind=="全部"){
    res = await Goods.findAll({
      where:{
        saled:false,
        seller_id:{
          [Op.ne]:userid
        }
      }
    });
  }else{
    res = await Goods.findAll({
      where:{
        kind:kind,
        saled:false,
        seller_id:{
          [Op.ne]:userid
        }
      }
    });
  }
  //计算距离进行过滤
  //用户位置
  const start = {
    latitude:latitude,
    longitude:longitude
  }
  let data = new Array();
  res.forEach((r)=>{
    const end = {
      latitude:r.dataValues.latitude,
      longitude:r.dataValues.longitude,
    }

    //计算距离
    const dis = haversine(start,end,{unit:'meter'});

    if(dis<=distance){
      data.push(r);
    }
  })

  return data;
}
//获取商品明细
const getGoodsDetail=async function(goodsid){
  return await Goods.findByPk(goodsid);
}

const getGoodsOnSale=async function (id) {
  return Goods.findAll({
    where:{
      saled:false,
      seller_id:id
    }
  });
}
exports.addGoods=addGoods;
exports.getAllGoods=getAllGoods;
exports.getGoodsDetail=getGoodsDetail;
exports.getGoodsByCommunity=getGoodsByCommunity;
exports.getGoodsByDistance=getGoodsByDistance;
exports.getGoodsOnSale=getGoodsOnSale;
