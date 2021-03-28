const Goods = require('../../models/goods');

const addGoods=function (owner,goods_info) {
  Goods.addGoods(owner,goods_info);
}

exports.addGoods=addGoods;
