const User = require('../../models/user/user')

const addUser=async function (openid,name,avatar,gender) {
  return await User.addUser(openid,name,avatar,gender);
}

exports.addUser=addUser;
