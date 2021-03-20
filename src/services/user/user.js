const User = require('../../dao/user/user')

const addUser=function (id,name,avatar,gender) {
  User.addUser(id,name,avatar,gender);
}

exports.addUser=addUser;
