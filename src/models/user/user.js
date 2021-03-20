import sequelize from '../../lib/sequelize'
import { Sequelize, DataType, DataTypes } from 'sequelize'


/*-- auto-generated definition
create table users
(
  id         varchar(255) not null
primary key,
  name       varchar(255) not null,
  gender     tinyint(1)   not null,
  avatar     varchar(255) not null,
  last_login datetime     null
)
comment '用户信息表，id主键就是微信openid';*/


//用户表模型
const User = sequelize.define('users',{
  id:{
    type:DataTypes.STRING,
    primaryKey:true,
    allowNull:false
  },
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
  last_login:{
    type:DataTypes.DATE,
    allowNull:true
  }
});

module.exports={
  User
}
