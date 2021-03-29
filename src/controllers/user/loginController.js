import fs from 'fs'
import {APP} from '../../../myconfig/myconfig'
import path from "path"
const qs = require('qs')
const request = require('request')
const UserService = require("../../services/user/userService")
const jwt = require('jsonwebtoken')

//读取token加密秘钥
const publicKey = fs.readFileSync(path.join(__dirname, '../../../publicKey.pub'))

//处理接口
export default async (ctx)=>{
  //前端返回的code
  let code = ctx.request.body.code;

  console.log(code);
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

  //解析结果
  res = JSON.parse(res);

  //调用service层的addUser方法（会检查和处理是否已经存在用户）
  let [user,up_location] = await UserService.addUser(res.openid, ctx.request.body.name,
    ctx.request.body.avatar, ctx.request.body.gender);
  console.log(up_location);

  //设置接口返回信息（下发token）第三个参数表明要不要上传小区信息
  ctx.body = {token:jwt.sign({id:user.id},publicKey),
    user:user,up_location:up_location};
}
