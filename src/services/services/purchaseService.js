import sequelize from '../../lib/sequelize'

const getPurchase = require("../../models/service_purchase")

const purchase = getPurchase(sequelize);

export const getPurchaseByServiceId = async function (serviceId) {
  return await purchase.findAll({
    where:{
      service_id:serviceId
    }
  });
}

export const getPurchaseByUserId = async function (userId) {
  return await purchase.findAll({
    where:{
      user_id:userId
    }
  });
}
