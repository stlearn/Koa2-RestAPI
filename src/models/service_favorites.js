const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    main_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "main_id"
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    service_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_id",
      references: {
        key: "service_id",
        model: "services_model"
      }
    }
  };
  const options = {
    tableName: "service_favorites",
    comment: "",
    indexes: [{
      name: "user_id",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "service_id",
      unique: false,
      type: "BTREE",
      fields: ["service_id"]
    }]
  };
  const ServiceFavoritesModel = sequelize.define("service_favorites_model", attributes, options);
  return ServiceFavoritesModel;
};