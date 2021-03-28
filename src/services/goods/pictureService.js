import getModel from '../../models/pictures'
import sequelize from '../../lib/sequelize'

//定义模型
const pic = getModel(sequelize);

/**
 * 根据商品id获取所有图片
 * @param id goods:id
 * @returns {Promise<void>} 图片链接数组
 */
const getByGoodsId = async function (goods_id) {
  const res = await pic.findAll({
    where:{
      goods_id:id
    }
  });
}

/**
 * 添加一批图片
 * @param goods_id
 * @param images 链接数组
 */
const addPictures = function (goods_id,images) {
  for(let i=0;i<images.length;i++){
    pic.create({
      goods_id:goods_id,
      pictureUrl: images[i]
    });
    console.log("add"+images[i]);
  }
}

export{
  addPictures,
  getByGoodsId
}
