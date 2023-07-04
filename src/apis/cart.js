import instance from '@/utils/http.js'

//加入购物车
export const insertCartApi = ({ skuId, count }) => {
  return instance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//获取接口购物车列表
export const findNewCartListApi = () => {
  return instance({
    url: '/member/cart'
  })
}
export const delCartApi = (ids) => {
  return instance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
export const mergeCartApi = (data) => {
  return instance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}