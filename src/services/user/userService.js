import sequelize from '../../lib/sequelize'
const getUser = require('../../models/user')

//实例化model
const User = getUser(sequelize);
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
      first_login:Date.now()+8 * 60 * 60 * 1000 //转化成北京时间
    });
    console.log("已经插入数据库：");
    console.log(JSON.stringify(user.id));
    console.log(JSON.stringify(user.openid));
    //返回数据库生成的id
    return user;
  }else{//当前用户已经注册
    console.log("查找到用户：");
    console.log(JSON.stringify(res[0].id));
    console.log(JSON.stringify(res[0].openid));
    //返回数据库生成的id
    return res[0];
  }
}

exports.addUser=addUser;
