const { DataTypes } = require('sequelize');

module.exports = sequelize=>{
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: "商品id 主键\r\n",
      field: "id"
    },
    seller_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "卖家id 外键",
      field: "seller_id",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "价格",
      field: "price"
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "商品名称",
      field: "name"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "商品描述",
      field: "description"
    },
    saled: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "是否已经售卖",
      field: "saled"
    },
    buyer_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "买家id",
      field: "buyer_id",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    reviews: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "商品评价\n",
      field: "reviews"
    },
    up_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "上架时间",
      field: "up_time"
    },
    saled_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "出售时间",
      field: "saled_time"
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imageUrl"
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "longitude"
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "latitude"
    }
  };
  const options = {
    tableName: "goods",
    comment: "",
    indexes: [{
      name: "seller_id",
      unique: false,
      type: "BTREE",
      fields: ["seller_id"]
    }, {
      name: "buyer_id",
      unique: false,
      type: "BTREE",
      fields: ["buyer_id"]
    }]
  };
  const GoodsModel = sequelize.define("goods", attributes, options);
  return GoodsModel;
};

