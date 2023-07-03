// 封装购物车模块

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart添加商品
  const addCart = (goods) => {
    console.log('添加', goods)
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }
  // 删除商品
  const delCart = (skuId) => {
    console.log('删除')
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }
  // 单选功能
  const singleCheck = (attrsText, selected) => {
    const item = cartList.value.find(item => {
      item.attrsText === attrsText
    })
    item.selected = selected
  }
  //全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  //购物车总数
  const totalCount = computed(() => cartList.value.reduce((total, item) => total + item.count, 0))
  //购物车总金额
  const totalPrice = computed(() => cartList.value.reduce((total, item) => total + item.count * item.price, 0))
  // 购物车选中数
  const checkCount = computed(() => cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count, 0))

  // 选中商品金额
  const checkPrice = computed(() => cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count * item.price, 0))
  //  是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  return {
    cartList,
    totalCount,
    totalPrice,
    isAll,
    checkCount,
    checkPrice,
    allCheck,
    addCart,
    delCart,
    singleCheck

  }
}, {
  persist: true,
})