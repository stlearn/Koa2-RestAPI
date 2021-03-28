const GoodsService=require("../../services/goods/goodsService")

const owner = {
  id:15
}
const goods={
  name:"键盘",
  price:"13.6",
  longitude:30.6789,
  latitude:150.77669,
  images: ["https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w%3D580/sign=ab8d422bcf1349547e1ee86c664f92dd/5374b251f3deb48f79065b74f41f3a292cf578b8.jpg",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170829%2Fbe48d4659c614339a73766a642e5a554_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619433557&t=b0a66e36e5b35335f5c3cc89e636eedc",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2FTB2AN0Nv_tYBeNjy1XdXXXXyVXa_%21%210-rate.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619433611&t=8c3d6b12a62b9ef1687beb494fa013f8"]
}

export default (ctx)=> {
  GoodsService.addGoods(owner,goods);
}
