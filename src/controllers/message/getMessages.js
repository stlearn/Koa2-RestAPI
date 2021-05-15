const messageService = require('../../services/message/messageServices')
import userService from '../../services/user/userService'
import goodsService from '../../services/goods/goodsService'

export default async (ctx)=> {

  //用户id
  const receiver = ctx.id;
  const sender = ctx.query.sender;


  // const messages = await messageService.getMessageCount(userid);
  //
  //
  // let users = new Map();
  // let last = new Map;
  // let res = new Array();
  //
  // messages.forEach((g)=>{
  //   let a = g.dataValues;
  //   if(a.unread){
  //     if(users.has(a.sender)){
  //       users.set(a.sender,users.get(a.sender)+1);
  //       last.set(a.sender,a.message);
  //     }else{
  //       users.set(a.sender,1);
  //       last.set(a.sender,a.message);
  //     }
  //   }
  // });
  //
  // for(let key of users.keys()){
  //   const user = await userService.getUserInfo(key);
  //   const owner = {
  //     name:user.name,
  //     avatar:user.avatar
  //   }
  //   res.push({
  //     sender:key,
  //     count:users.get(key),
  //     message:last.get(key),
  //     avatar: owner.avatar
  //   })
  // }
  //
  // ctx.body = res;
}
