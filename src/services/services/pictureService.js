import getModel from '../../models/service_pictures'
import sequelize from '../../lib/sequelize'

//定义模型
const pic = getModel(sequelize);

/**
 * 根据商品id获取所有图片
 * @param id goods:id
 * @returns {Promise<any[]>} 图片链接数组
 */
const getByServicesId = async function (services_id) {
  //获取
  const res = await pic.findAll({
    where:{
      service_id:services_id
    }
  });

  //提取url
  let imageList = new Array();
  res.forEach((e)=>imageList.push(e.pictureUrl));

  return imageList;
}

/**
 * 添加一批图片
 * @param service_id
 * @param images 链接数组
 */
const addPictures = function (service_id,images) {
  for(let i=0;i<images.length;i++){
    pic.create({
      service_id:service_id,
      pictureUrl: images[i]
    });
    console.log("add"+images[i]);
  }
}

export{
  addPictures,
  getByServicesId
}
