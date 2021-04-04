const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    service_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "service_id",
      references: {
        key: "service_id",
        model: "services_model"
      }
    },
    pictureUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pictureUrl"
    }
  };
  const options = {
    tableName: "service_pictures",
    comment: "",
    indexes: [{
      name: "service_id",
      unique: false,
      type: "BTREE",
      fields: ["service_id"]
    }]
  };
  const ServicePicturesModel = sequelize.define("service_pictures_model", attributes, options);
  return ServicePicturesModel;
};