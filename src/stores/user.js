import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user.js'
import { mergeCartApi } from '@/apis/cart.js'
import { useCartStore } from './cart.js'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const cartStore = useCartStore()
  // 登录接口
  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })
    userInfo.value = res.data.result
    await mergeCartApi(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.findNewCartList()
  }
  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  return { userInfo, getUserInfo, clearUserInfo }

}, {
  persist: true
})