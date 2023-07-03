import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user.js'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginApi({ account, password })
    userInfo.value = res.data.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  return { userInfo, getUserInfo, clearUserInfo }

}, {
  persist: true
})