const UserService = require("../../services/user/userService")
export default async (ctx)=>{

  const userid = ctx.id;
  let data = {
    community:"",
    community_longitude:"",
    community_latitude:"",
  }
  //取出数据
  data = ctx.request.body;

  UserService.updateLocation(data,userid);

  ctx.body = "{status:'success'}";
}
