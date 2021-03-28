const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT(32),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "图片id",
      field: "id"
    },
    goods_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "商品索引id",
      field: "goods_id",
      references: {
        key: "id",
        model: "goods_model"
      }
    },
    pictureUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "图片",
      field: "pictureUrl"
    }
  };
  const options = {
    tableName: "pictures",
    comment: "",
    indexes: [{
      name: "goods_id",
      unique: false,
      type: "BTREE",
      fields: ["goods_id"]
    }]
  };
  const PicturesModel = sequelize.define("pictures_model", attributes, options);
  return PicturesModel;
};
