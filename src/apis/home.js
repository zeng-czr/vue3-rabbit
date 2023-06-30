import instance from "@/utils/http"
//获取banner轮播图数据
export function getBannerApi () {
  return instance({
    url: 'home/banner'
  })
}
//获取新鲜好物数据
export function getNewApi () {
  return instance({
    url: 'home/new'
  })
}
//获取人气推荐数据
export function getHotApi () {
  return instance({
    url: 'home/hot'
  })
}
//获取商品数据
export function getGoodsApi () {
  return instance({
    url: 'home/goods'
  })
}
