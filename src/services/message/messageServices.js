import { Op, QueryTypes } from 'sequelize'
import sequelize from '../../lib/sequelize'
const getGoods = require('../../models/goods')
const getUser = require('../../models/user')

const gMessages = require('../../models/messages')

//导入辅助model
const Goods = getGoods(sequelize);
const User = getUser(sequelize);
const Messages = gMessages(sequelize)


export const getMessageCount = async function (user_id) {
  const res = await Messages.findAll({
    where:{
      receiver:user_id
    }
  });
  return res;
}

export const getMessages = async function (receiver,sender) {
  const res = await Messages.findAll({
    where:{
      [Op.or]:[
        {},
        {}
      ]
    }
  });
  return res;
}

