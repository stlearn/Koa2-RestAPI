const qs = require('qs')
const request = require('request')
const User = require("../../services/user/user")
import {APP} from '../../../myconfig/myconfig'
export default async (ctx)=>{
  //前端返回的code
  let code = ctx.request.body.code;
  console.log(ctx.request.body);
  //GET https://api.weixin.qq.com/sns/jscode2session?
  //appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
  //参数
  let params={
    appid:APP.appid,
    secret:APP.secret,
    js_code:code,
    grant_type:APP.grant_type
  }
  //微信获取openID的接口
  let url = "https://api.weixin.qq.com/sns/jscode2session?"+qs.stringify(params);

  //阻塞等待返回id
  let res = await new Promise((resolve, reject) =>{
    request(url,'GET',function (error,response,body) {
      if (!error && response.statusCode == 200) {
        resolve(body)   // 返回response的内容
      }else{
        reject(error);   // 返回错误信息
      };
    })
  });

  //
  res = JSON.parse(res);
  console.log(res);

  //调用service层的addUser方法
  User.addUser(res.openid,ctx.request.body.name,ctx.request.body.avatar,ctx.request.body.gender);

  ctx.body = {id:res.openid};
}
