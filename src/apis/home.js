import instance from "@/utils/http"
//获取banner轮播图数据
export function getBannerApi (params = {}) {
  // 默认为1，商品为2
  const { distributionSite = '1' } = params
  return instance({
    url: 'home/banner',
    params: {
      distributionSite
    }
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
