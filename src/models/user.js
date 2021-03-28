import { DataTypes } from 'sequelize'

//用户表模型
module.exports = sequelize => {
   return sequelize.define('users',{
    id:{
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    openid:{
      type:DataTypes.STRING,
      allowNull:false
    }
    ,
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    gender:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    avatar:{
      type:DataTypes.STRING,
      allowNull:false
    },
    first_login:{
      type:DataTypes.DATE,
      allowNull:false
    },
    introduction:{
      type:DataTypes.STRING,
      allowNull:true
    }
  });
}

