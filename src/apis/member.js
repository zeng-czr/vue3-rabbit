import instance from '@/utils/http.js'

export const getLikeListApi = ({ limit = 4 }) => {
  return instance({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
// 获取订单
export const getUserOrderApi = (params) => {
  return instance({
    url: '/member/order',
    method: 'GET',
    params
  })
}
