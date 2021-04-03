const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    main_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "main_id"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id"
    },
    goods_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "goods_id"
    }
  };
  const options = {
    tableName: "favorites",
    comment: "",
    indexes: []
  };
  const FavoritesModel = sequelize.define("favorites_model", attributes, options);
  return FavoritesModel;
};