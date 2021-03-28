//解析token
import fs from "fs"
import path from "path"
const jwt = require('jsonwebtoken')
//读取token加密秘钥
const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

module.exports = function() {
  return async function(ctx,next){
    try{
      const token = ctx.header.authorization;
      if(token){
        let payload;
        try{
          payload = jwt.verify(token.split(' ')[1],publicKey);
          ctx.id = payload.id
        }catch (e) {
          console("token verify error",e);
        }
      }
      await next();
    }catch (e) {
      console.log("在token解析中间件抛出异常",e);
    }
  }
}
