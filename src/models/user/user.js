import sequelize from '../../lib/sequelize'
import { DataTypes } from 'sequelize'


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
  last_login:{
    type:DataTypes.DATE,
    allowNull:false
  },
  introduction:{
    type:DataTypes.STRING,
    allowNull:true
  }
});

//添加用户
const addUser=async function (openid,name,avatar,gender) {

  const res = await User.findAll({
    where:{
      openid:openid
    }
  });
  //当前用户未注册
  if(res[0]==null){
    const user = await User.create({
    openid:openid,
    name:name,
    avatar:avatar,
    gender:gender,
    last_login:Date.now()+8 * 60 * 60 * 1000 //转化成北京时间
    });
    console.log("已经插入数据库：");
    console.log(JSON.stringify(user));
    //返回数据库生成的id
    return user.id;
  }else{//当前用户已经注册
    console.log("查找到用户：");
    console.log(JSON.stringify(res));
    //返回数据库生成的id
    return res[0].id;
  }
}

exports.addUser=addUser;

