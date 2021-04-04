const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    purchase_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "purchase_id"
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
    },
    provide_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "provide_time"
    },
    review: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "review"
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
    }
  };
  const options = {
    tableName: "service_purchase",
    comment: "",
    indexes: [{
      name: "service_purchase_services_service_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["service_id"]
    }, {
      name: "service_purchase_users_id_fk",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }]
  };
  const ServicePurchaseModel = sequelize.define("service_purchase_model", attributes, options);
  return ServicePurchaseModel;
};
