const module = require('../../models/user/user')

const addUser=async function (id,name,avatar,gender) {
  const user = await module.User.create({
    id:id,
    name:name,
    avatar:avatar,
    gender:gender,
    last_login:Date.now()+8 * 60 * 60 * 1000 //转化成北京时间
  });
  console.log("已经插入数据库：")
  console.log(JSON.stringify(user));
}

exports.addUser=addUser;
