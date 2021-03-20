import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'
export default (ctx) => {
  /*var User = sequelize.define('user',{
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name:Sequelize.STRING(255),
    gender:Sequelize.BOOLEAN,
    avatar:Sequelize.STRING(255),
    last_login:Sequelize.DATE
  },{
    timestamps:false
  });
  User.create({
    name: '高云飞',
    gender: true,
    avatar:'http://vbfvbhv.vfvfv.com',
    last_login:Date.now()
  }).then(function (p) {
    console.log('created.' + JSON.stringify(p));
  }).catch(function (err) {
    console.log('failed: ' + err);
  });
  // 返回结果
  ctx.body = "test";*/
  if(ctx.method=='POST'){
    ctx.body = {message:'POST'};
  }
  if(ctx.method=='GET'){
    ctx.body = {message:'GET'};
  }

}
