import { Op, QueryTypes } from 'sequelize'

const getService = require('../../models/services');
const getUser = require('../../models/user')
import sequelize from '../../lib/sequelize'
import { addPictures } from './pictureService'

//距离计算组件
const haversine = require('haversine')

const Service = getService(sequelize);
const User = getUser(sequelize);

/**
 * 添加服务
 * @param owner
 * @param goods_info
 * @returns {Promise<*>}
 */
export const addService = async function(owner,service_info){
  const service = await Service.create({
    provider: owner.id,
    price:service_info.price,
    name :service_info.name,
    provide_times: 0,
    up_time: Date.now()+8 * 60 * 60 * 1000,
    imageUrl: service_info.images[0],
    longitude: service_info.longitude,
    latitude:service_info.latitude,
    description:service_info.description,
    kind:service_info.kind
  });

  //将所有图片添加到pic表
  addPictures(service.service_id,service_info.images);

  return service;
}

/***
 * 获取所有商品（测试方法）
 * @param kind
 * @returns {Promise<*>}
 */
export const getAllServices=async function (kind,userid) {
  if(kind=='全部'){
    return Service.findAll();
  }
  return Service.findAll({
    where:{
      kind:kind,
      provider:{
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
export const getServicesByCommunity=async function(community,kind,userid){
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
    res = await Service.findAll({
      where:{
        provider: {
          [Op.in]:ids,
          [Op.ne]:userid
        }
      }
    });
  }else{
    res = await Service.findAll({
      where:{
        provider: {
          [Op.in]:ids,
          [Op.ne]:userid
        },
        kind:kind
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
export const getServicesByDistance=async function(distance,longitude,latitude,kind,userid){
  let res;

  console.log(distance,longitude,latitude,kind);

  if(kind=="全部"){
    res = await Service.findAll({
      where:{
        provider:{
          [Op.ne]:userid
        }
      }
    });
  }else{
    res = await Service.findAll({
      where:{
        kind:kind,
        provider:{
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
export const getServiceDetail=async function(goodsid){
  return await Service.findByPk(goodsid);
}

/**
 * 获取我在卖的
 * @param id
 * @returns {Promise<<Model[]>>}
 */
export const getServiceOnSale=async function (id) {
  return Service.findAll({
    where:{
      provider:id
    }
  });
}

/**
 * 获取我用过
 * @param id
 * @returns {Promise<<Model[]>>}
 */
export const getServicesUsed=async function (id) {

}

/**
 * 按id获取商品
 * @param goods_id
 * @returns {Promise<*>}
 */
export const getServiceById=async function (id) {
  return Service.findOne({
    where:{
      service_id:id
    }
  });
}

