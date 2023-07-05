import instance from '@/utils/http.js'


// 生成订单
export const getCheckoutInfoApi = () => {
  return instance({
    url: '/member/order/pre'
  })
}
// 获取收货地址
export const getAddressApi = () => {
  return instance({
    url: '/member/address'
  })
}
// 创建订单
export const createOrderApi = (data) => {
  return instance({
    url: '/member/order',
    method: 'POST',
    data
  })
}
// 获取订单信息
export const getOrderApi = (id) => {
  return instance({
    url: `/member/order/${id}`,
  })
}